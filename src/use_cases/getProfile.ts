import Profile from "../repositories/profile";
import GetprofileRequest from "../types/requests/getProfileRequest";

export default async (request: GetprofileRequest) => {
    try {
        return await Profile.findById(request.id);
    } catch (error) {
        return false;
    }

};