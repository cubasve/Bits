const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const habitSchema = new Schema({
    name: { type: String, required: true },
    cue: { type: String, required: true },
    craving: { type: String, required: true },
    response: { type: String, required: true },
    reward: { type: String, required: true },
    frequency: [{ type: String, required: true }]
}, {
    timestamps: true,
});

module.exports = mongoose.model('Habit', habitSchema);