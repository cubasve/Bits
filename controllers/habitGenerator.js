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
    try {
        const user = await User.findById({ _id: req.user._id }); 
        return res.status(200).json({ user: user });
    } catch (err) {
        console.error(err);
        return res.status(400).json(err);
    }
}

async function create(req, res) {
    try {
        const user = await User.findById({ _id: req.user._id });
        const {
            responseBronze, 
            responseSilver, 
            responseGold, 
            cueBehavior,
            cueTime,
            cueLocation,
            currentHabit,
            wantedHabit,
        } = req.body;
        user.userHabitGenerator.push({
            'responseBronze': responseBronze,
            'responseSilver': responseSilver,
            'responseGold': responseGold,
            'cueBehavior': cueBehavior,
            'cueTime': cueTime,
            'cueLocation': cueLocation,
            'currentHabit': currentHabit,
            'wantedHabit': wantedHabit,
        });
        await user.save();
        res.status(201).json({ user: user });
    } catch (err) {
        return res.status(400).json(err);
    }
}

async function update(req, res) {
    try {
        const user = await User.findById({ _id: req.user._id });
        const habitId = user.userHabitGenerator.id(req.body._id);

        habitId.set(req.body);
        await user.save();
        res.status(201).json({ user: user });
    } catch (err) {
        return res.status(400).json(err);
    }
}

async function remove(req, res) {
    try {
        const user = await User.findById({ _id: req.user._id });
        const habitId = user.userHabitGenerator.id(req.body.id);
        console.log('req.user: ', req.user);
        console.log('habitID: ', req.body.id);
        
        habitId.remove();
        await user.save();
        res.status(200).json({ user: user });
    } catch (err) {
        return res.status(400).json(err);
    }
}