import { validationResult } from "express-validator";
import createProfile from "../use_cases/createProfile";
import deleteProfile from "../use_cases/deleteProfile";
import getProfile from "../use_cases/getProfile";
import getAllProfile from "../use_cases/getAllProfile";
import CreateProfileRequest from "../types/requests/createProfileRequest";
import DeleteProfileRequest from "../types/requests/deleteProfileRequest";
import GetProfileRequest from "../types/requests/getProfileRequest";
import UpdateProfileRequest from "../types/requests/updateProfileRequest";
import updateProfile from "../use_cases/updateProfile";


export default {
  createProfile: async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const request: CreateProfileRequest = {
      fullName: {
        firstName: req.body.firstName,
        lastName: req.body.lastName
      },
      phoneNumber: req.body.phoneNumber,
      address: {
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
      },
      sponsorCode: req.body.sponsorCode,
      sponsor: req.body.sponsor,
      userID: req.body.userID

    };

    return res.status(200).json((await createProfile(request))._id);
  },

  deleteProfile: async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const request: DeleteProfileRequest = {
      id: req.params.id
    }

    if (await deleteProfile(request)) {
      return res.sendStatus(204);
    }
    return res.sendStatus(404);

  },

  getProfile: async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const request: GetProfileRequest = {
      id: req.params.id
    };

    const result = await getProfile(request);
    if (result) {
      return res.status(200).json(result);
    }
    return res.sendStatus(404);

  },
  getAllProfile: async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return res.status(200).json(await getAllProfile());

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
        lastName: req.body.lastName
      },
      phoneNumber: req.body.phoneNumber,
      address: {
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
      },
      sponsorCode: req.body.sponsorCode,
      sponsor: req.body.sponsor
    }

    if (await updateProfile(request)) {
      return res.sendStatus(200);
    }
    return res.sendStatus(404);
  }

};
