const mongoose = require("mongoose");
async function main() {
  await mongoose.connect(
    "mongodb+srv://varsha:varshaxyz@cluster0.iuvsi7y.mongodb.net/HospitalApi?retryWrites=true&w=majority"
  );
  console.log("Connection SuccessFull !!");
}
main().catch((error) => {
  console.log("Connection Not Success Full !!");
});
