import BaseError from "./baseError";
export default class SponsorNotFound extends BaseError {
  constructor() {
    super(400, "Sponsor not found.", []);
  }
}
