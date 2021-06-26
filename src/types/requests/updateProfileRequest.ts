export default interface UpdateProfileRequest {
  id: String;
  fullName: {
    firstName: String;
    lastName: String;
  };
  phoneNumber: Number;
  address: {
    street: String;
    city: String;
    state: String;
    zip: Number;
  };
  profileId: String;
}
