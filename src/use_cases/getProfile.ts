import Application from "../repositories/profile";
import GetApplicationRequest from "../types/requests/getProfileRequest";

export default async (request: GetApplicationRequest) => {
    try {
        return await Application.findById(request.id);
    } catch (error) {
        return false;
    }

};