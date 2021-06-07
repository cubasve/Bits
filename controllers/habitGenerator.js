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
        console.log('req.body: ', req.body);
        console.log('habitId BEFORE: ', habitId);

        // const updatedHabit = await habitId.replaceOne(habitId, req.body);
        // console.log('updatedHabit backend: ', updatedHabit);
        // console.log('user.habitId: ', user.habitId);
        habitId.set(req.body);
        console.log('habitId AFTER: ', habitId)
        // const updatedHabit = await habitId.findByIdAndUpdate(
        //     { _id: habitId },
        //     req.body,
        //     { new: true },
        // )
        // console.log('updatedHabit backend: ', updatedHabit);
        // console.log('user.habitId: ', user.habitId);

        // const updatedHabit = await User.habitId.findByIdAndUpdate(
        //     { _id: habitId },
        //     req.body,
        //     { new: true }, 
        // )
        await user.save();

        // const user = await user.userHabitGenerator.findByIdAndUpdate(
        //     { _id: habitId }, //find user first
        //     req.body, //update info using req.body
        //     { new: true } //options: new returns the newly updated habit
        // );
        //const habitId = user.userHabitGenerator.id(req.body.id);
        // await user.save();
        res.status(201).json({ user: user });
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
        res.status(200).json({ user: user });
    } catch (err) {
        return res.status(400).json(err);
    }
}