import Profile from "../repositories/profile";
import DeleteProfileRequest from "../types/requests/deleteProfileRequest";

export default async (request: DeleteProfileRequest) => {
  console.log(request.id);
  await Profile.findByIdAndDelete(request.id);
};
