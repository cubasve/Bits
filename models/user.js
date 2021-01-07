const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    // match: [/\S+@\S+\.\S+/, 'is invalid'] },
    password: { type: String, required: true },
    habitGenerator: [{ type: Schema.Types.ObjectId, ref: 'HabitGenerator' }],
    habitDetonator: [{ type: Schema.Types.ObjectId, ref: 'HabitDetonator' }],
}, {
    timestamps: true,
});

userSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.password;
        return ret;
    }
});

userSchema.pre('save', function (next) {
    const user = this; //this = current Mongoose user document being saved
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password)
    //password (plain text) is hashed and compared to this.password (hashed version of user's password saved in database)
}

module.exports = mongoose.model('User', userSchema); 