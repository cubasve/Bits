const User = require('../models/user');

// async function show(req, res) {
//     try {
//         const user = await User.findById({ _id: req.user._id });
//         return res.json({ user: user });
//     } catch (err) {
//         return res.status(400).json(err);
//     }
// }


async function show(req, res) {
    try {
        const user = await User.findById({ _id: req.user._id }); //req.body._id OR req.user._id?
        return res.json({ user: user });//explicitly return to fetch call 
    } catch (err) {
        console.error(err);
        return res.status(400).json(err);
    }
}

async function create(req, res) {
    try {
        const user = await User.findById({ _id: req.user._id });
        console.log('user: ', user);
        await user.save();
        res.json({ user: user });
    } catch (err) {
        return res.status(400).json(err);
    }
}