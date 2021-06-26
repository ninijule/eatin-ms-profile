import mongoose from "../db/mongodb/index";

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minlength: 0,
      maxlength: 25,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 0,
      maxlength: 25,
    },
  },
  phoneNumber: {
    type: String,
    required: true,
    maxlength: 15,
  },
  address: {
    street: {
      type: String,
      required: true,
      maxlength: 30,
    },
    city: {
      type: String,
      required: true,
      maxlength: 30,
    },
    state: {
      type: String,
      uppercase: true,
      required: true,
      maxlength: 20,
    },
    zip: Number,
  },
  sponsorCode: {
    type: String,
    required: true,
    default: null,
  },
  sponsor: {
    type: String,
    default: null,
  },
  userId: {
    type: String,
    required: true,
    default: null,
  },
});

const Profile = mongoose.model("Profile", ProfileSchema);

export default Profile;
