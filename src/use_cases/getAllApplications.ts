import Application from "../repositories/profile";
import GetAllApplicationRequest from "../types/requests/getAllApplicationRequest";

export default async (request: GetAllApplicationRequest) => {
    try {
        return await Application.find();
    } catch (error) {
        return false;
    }

};