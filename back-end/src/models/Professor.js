const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const professorSchema = new Schema({
    name: { type: String },
    email: {type: String, required: true, unique: true},
    photo: {type: String, required: true, unique: true},
    researchAreas: {type: Array, required: true},
    department: {type: String, required: true},
    introduction: {type: String, required: true}});

const Professor = mongoose.model('Professor', professorSchema);

module.exports = Professor;
