import { validationResult } from "express-validator";
import createProfile from "../use_cases/createProfile";
import deleteProfile from "../use_cases/deleteProfile";
import getProfile from "../use_cases/getProfile";
import getSelfProfile from "../use_cases/getSelfProfile";
import CreateProfileRequest from "../types/requests/createProfileRequest";
import DeleteProfileRequest from "../types/requests/deleteProfileRequest";
import GetProfileRequest from "../types/requests/getProfileRequest";
import UpdateProfileRequest from "../types/requests/updateProfileRequest";
import updateProfile from "../use_cases/updateProfile";
import GetSelfProfileRequest from "../types/requests/getSelfProfileRequest";
import SearchProfileRequest from "../types/requests/searchProfileRequest";
import searchProfile from "../use_cases/searchProfile";

export default {
  createProfile: async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const request: CreateProfileRequest = {
      fullName: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
      phoneNumber: req.body.phoneNumber,
      address: {
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
      },
      sponsorCode: req.body.sponsorCode,
      sponsor: req.body.sponsor,
      userId: req.body.userId,
    };

    return res.status(200).json((await createProfile(request))._id);
  },

  deleteProfile: async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const request: DeleteProfileRequest = {
      id: req.params.id,
    };

    await deleteProfile(request);
    return res.sendStatus(204);
  },

  getProfile: async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const request: GetProfileRequest = {
      id: req.params.id,
    };

    const result = await getProfile(request);
    if (result) {
      return res.status(200).json(result);
    }
    return res.sendStatus(404);
  },
  getSelfProfileOrSearch: async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (Object.keys(req.query).length > 0) {
      const request: SearchProfileRequest = {};

      if (req.query.userId != undefined) {
        request.userId = <string>req.query.userId;
      }

      if (Object.keys(request).length > 0) {
        return res.status(200).json(await searchProfile(request));
      }
    }

    const request: GetSelfProfileRequest = {
      profileId: JSON.parse(<string>req.headers.user).id,
    };

    return res.status(200).json(await getSelfProfile(request));
  },
  updateProfile: async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const request: UpdateProfileRequest = {
      id: req.params.id,
      fullName: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
      phoneNumber: req.body.phoneNumber,
      address: {
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
      },
      profileId: JSON.parse(<string>req.headers.user).id,
    };

    await updateProfile(request);
    return res.sendStatus(200);
  },
};
