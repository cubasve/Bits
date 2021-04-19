const User = require('../models/user');

module.exports = {
    showOneHabit,
    show,
    create,
    update, 
    remove,
}

async function showOneHabit(req, res) {
    try {
        const user = await User.findById({ _id: req.user._id });
        const habitId = user.userHabitGenerator.id(req.body.id);
        res.json({ habitId: habitId });
    } catch (err) {
        return res.status(400).json(err);
    }
}

async function show(req, res) {
    console.log('req.user: ', req.user);
    try {
        const user = await User.findById({ _id: req.user._id }); //req.body._id OR req.user._id?
        //console.log('req.user: ', req.user);
        //console.log('req.user._id: ', req.user._id);
        //console.log('user: ', user);
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
            //name, 
            responseBronze, 
            responseSilver, 
            responseGold, 
            cueBehavior,
            cueTime,
            cueLocation,
            currentHabit,
            //neededHabit,
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

async function update(req, res) {
    try {
        const user = await User.findById({ _id: req.user._id });
        const habitId = user.userHabitGenerator.id(req.body.id);
        //id.set({});
        await user.save();
        res.json({ user: user });
    } catch (err) {
        return res.status(400).json(err);
    }
}

async function remove(req, res) {
    try {
        const user = await User.findById({ _id: req.user._id });
        const habitId = user.userHabitGenerator.id(req.body.id);
        habitId.remove();
        await user.save();
        res.json({ user: user });
    } catch (err) {
        return res.status(400).json(err);
    }
}