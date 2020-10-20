const mongoose = require('mongoose');
const bcrypt = require('brcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true, match: [/\S+@\S+\.\S+/, 'is invalid'] },
    password: { type: String, required: true },
    userHabits: [{ type: Schema.Types.ObjectId, ref: 'Habit' }],
}, {
    timestamps: true,
});

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password), SALT_ROUNDS, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    }
});

module.exports = mongoose.model('User', userSchema);