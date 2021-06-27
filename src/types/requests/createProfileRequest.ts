export default interface CreateProfileRequest {
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
  sponsor: String;
  userId: String;
}
