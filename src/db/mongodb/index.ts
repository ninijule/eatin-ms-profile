import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", function () {
    console.log("Connexion successfull");
  })
  .on("error", function (error: any) {
    console.log("Connect error", error);
  })
  .on("disconnected", function () {
    console.log("Connection disconnected with mongoDatabase");
    process.exit(1);
  });

export default mongoose;
