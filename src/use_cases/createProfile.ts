import Profile from "../repositories/profile";
import CreateProfileRequest from "../types/requests/createProfileRequest";
import { v4 } from "uuid";
import SponsorNotFound from "../types/errors/sponsorNotFound";

export default async (request: CreateProfileRequest) => {
  if (request.sponsor) {
    const sponsor = await Profile.find({ sponsorCode: request.sponsor });
    console.log(sponsor);
    if (sponsor.length == 0) {
      throw new SponsorNotFound();
    }
  }

  let sponsorCode = v4();
  while (await Profile.findOne({ sponsorCode }).exec()) {
    sponsorCode = v4();
  }
  const profile = {
    ...request,
    sponsorCode,
  };
  return await Profile.create(profile);
};
