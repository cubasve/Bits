const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const habitGeneratorSchema = new Schema({
    name: { type: String, required: true },
    cue: { type: String, required: true },
    craving: { type: String, required: true },
    responseBronze: { type: String, required: true },
    responseSilver: { type: String, required: true },
    responseGold: { type: String, required: true },
    reward: { type: String, required: true },
    frequency: [{ type: String, required: true }]
}, {
    timestamps: true,
});

module.exports = mongoose.model('HabitGenerator', habitGeneratorSchema);