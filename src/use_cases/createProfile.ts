import Application from "../repositories/profile";
import CreateApplicationRequest from "../types/requests/createProfileRequest";
import { v4 } from "uuid";

export default async (request: CreateApplicationRequest) => {
  let sponsorCode = v4();
  while (await Application.findOne({ sponsorCode }).exec()) {
    sponsorCode = v4();
  }
  const application = {
    ...request,
    sponsorCode,
  };
  return await Application.create(application);
};
