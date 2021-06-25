import Profile from "../repositories/profile";

export default async () => {
    try {
        return await Profile.find();
    } catch (error) {
        return false;
    }

};