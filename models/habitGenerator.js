const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const habitGeneratorSchema = new Schema({
    name: { type: String, required: true },

    /* CUE INPUTS */
    cueBehavior: { type: String, required: true },
    cueTime: { type: String, required: true },
    cueLocation: { type: String, required: true },

    /* CRAVING AND REWARD INPUTS */
    currentHabit: { type: String, required: true },
    neededHabit: { type: String, required: true },
    wantedHabit: { type: String, required: true },

    /* RESPONSE INPUTS */
    responseBronze: { type: String, required: true },
    responseSilver: { type: String, required: true },
    responseGold: { type: String, required: true },

    frequency: [{ type: String, required: true }]
}, {
    timestamps: true,
});

module.exports = mongoose.model('HabitGenerator', habitGeneratorSchema);