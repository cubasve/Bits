const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const habitGenerator = new Schema({
    //name: { type: String, required: true },

    /* CUE INPUTS */
    cueBehavior: { type: String, required: true },
    cueTime: { type: String, required: true },
    cueLocation: { type: String, required: true },

    /* CRAVING AND REWARD INPUTS */
    currentHabit: { type: String, required: true },
    //neededHabit: { type: String, required: true },
    wantedHabit: { type: String, required: true },

    /* RESPONSE INPUTS */
    responseBronze: { type: String, required: true },
    responseSilver: { type: String, required: true },
    responseGold: { type: String, required: true },

    frequency: [{ type: String, required: true }]
}, {
    timestamps: true,
});

const userSchema = new Schema({
    name: { type: String},
    email: { type: String, required: true, lowercase: true, unique: true },
    // match: [/\S+@\S+\.\S+/, 'is invalid'] },
    password: { type: String },
    // habitGenerator: [{ type: Schema.Types.ObjectId, ref: 'HabitGenerator' }],
    userHabitGenerator: [habitGenerator],
    habitDetonator: [{ type: Schema.Types.ObjectId, ref: 'HabitDetonator' }],
}, {
    timestamps: true,
});

userSchema.set('toJSON', {
    transform: function (doc, ret) {
        // remove the password property when serializing doc to JSON
        delete ret.password;
        return ret;
    }
});

userSchema.pre('save', function (next) {
    //this = current user document being saved
    const user = this;
    if (!user.isModified('password')) return next();

    //password has been changed - salt and hash it
    bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
        if (err) return next(err);
        //replace the user provided password with the hash
        user.password = hash;
        next();
    });
})

userSchema.methods.comparePassword = function (tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model('User', userSchema); 