const mongoose = require(".");
const emailType = require("../helpers/email.helper");
const Schema = mongoose.Schema;

const organizersSchema = new Schema({
  name: String,
  email: emailType,
  events: [String],
});

const Organizers = mongoose.model("organizers", organizersSchema);

module.exports = Organizers;