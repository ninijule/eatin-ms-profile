import mongoose from "../db/mongodb/index";

const Schema = mongoose.Schema;
const ProfileSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        minlength: 0,
        maxlength: 50
    },
    tel: {
        type: String,
        required: true,
        maxlength: 255
    },
    address: {
        type: String,
        required: true,
        minlength: 0,
    },
    sponsorCode: {
        
    }

});

const Application = mongoose.model("Application", ApplicationSchema);

export default Application;
