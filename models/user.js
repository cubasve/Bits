const mongoose = require('mongoose');
const bcrypt = require('brcrypt');

const SALT_ROUNDS = 6;

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password), SALT_ROUNDS, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    }
})

module.exports('User', userSchema);