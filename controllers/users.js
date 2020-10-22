const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { default: tokenService } = require('../src/utils/tokenService');
const SECRET = process.env.SECRET;

module.exports = {
    signup,
}

function createJWT(user) {
    return jwt.sign({ user: user }, SECRET, { expiresIn: '24h' });
}

async function signup(req, res) {
    const user = new User(req.body);
    try {
        await user.save();
        const token = createJWT(user);
        res.json({ token: token });
    } catch (err) {
        res.status(400).json(err);
    }
}

