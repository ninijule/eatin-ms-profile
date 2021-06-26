import Profile from "../repositories/profile";
import GetProfileRequest from "../types/requests/getProfileRequest";

export default async (request: GetProfileRequest) => {
  return await Profile.findById(request.id);
};
