const User = require('../models/user');

// async function show(req, res) {
//     try {
//         const user = await User.findById({ _id: req.user._id });
//         return res.json({ user: user });
//     } catch (err) {
//         return res.status(400).json(err);
//     }
// }

module.exports = {
    show,
}


async function show(req, res) {
    try {
        const user = await User.findById({ _id: req.user._id }); //req.body._id OR req.user._id?
        return res.json({ user: user });
    } catch (err) {
        console.error(err);
        return res.status(400).json(err);
    }
}

async function create(req, res) {
    try {
        const user = await User.findById({ _id: req.user._id });
        console.log('req.body: ', req.body);
        const {
            name, 
            responseBronze, 
            responseSilver, 
            responseGold, 
            cueBehavior,
            cueTime,
            cueLocation,
            currentHabit,
            neededHabit,
            wantedHabit,
        } = req.body;
        user.userHabitGenerator.push({
            //'name': name, 
            'responseBronze': responseBronze,
            'responseSilver': responseSilver,
            'responseGold': responseGold,
            'cueBehavior': cueBehavior,
            'cueTime': cueTime,
            'cueLocation': cueLocation,
            'currentHabit': currentHabit,
            //'neededHabit': neededHabit,
            'wantedHabit': wantedHabit,
        });
        console.log('user: ', user);
        console.log('user.userHabitGenerator: ', user.userHabitGenerator);
        await user.save();
        res.json({ user: user });
    } catch (err) {
        return res.status(400).json(err);
    }
}