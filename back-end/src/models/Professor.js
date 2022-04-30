const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const professorSchema = new Schema({
    name: { type: String },
    email: {type: String, required: true},
    photo: {type: String, required: true},
    researchAreas: {type: Array},
    department: {type: String, required: true},
    introduction: {type: String}});

const Professor = mongoose.model('Professor', professorSchema);

module.exports = Professor;
