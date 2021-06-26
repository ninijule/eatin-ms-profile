import Profile from "../repositories/profile";
import GetSelfProfileRequest from "../types/requests/getSelfProfileRequest";

export default async (request: GetSelfProfileRequest) => {
  return await Profile.findById(request.profileId);
};
