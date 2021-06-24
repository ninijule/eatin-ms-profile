import Profile from "../repositories/profile";
import DeleteProfileRequest from "../types/requests/deleteProfileRequest";

export default async (request: DeleteProfileRequest) => {
    try {
        await Profile.findByIdAndDelete(request.id);
        return true;
    } catch (error) {
        return false;
    }

};