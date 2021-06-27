import Profile from "../repositories/profile";
import SearchProfileRequest from "../types/requests/searchProfileRequest";

export default async (request: SearchProfileRequest) => {
  return await Profile.find(request);
};
