import Profile from "../repositories/profile";
import UpdateProfileRequest from "../types/requests/updateProfileRequest";

export default async (request: UpdateProfileRequest) => {

    try {
        const profile = await Profile.findById(request.id);
        profile.fullName.firstName = request.fullName.firstName;
        profile.fullName.lastName = request.fullName.lastName;
        profile.phoneNumber = request.phoneNumber;
        profile.address.street = request.address.street;
        profile.address.city = request.address.city;
        profile.address.state = request.address.state;
        profile.address.zip = request.address.zip;
        profile.sponsor = request.sponsor;
        profile.sponsorCode = request.sponsorCode;
        profile.save();
        return true;
    } catch (error) {
        return false;
    }

}