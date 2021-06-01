const express = require('express');
const router = express.Router();
const habitGeneratorCtrl = require('../../controllers/habitGenerator');

//router.get('/:id', habitGeneratorCtrl.showOneHabit); //route: /api/habitgenerator/:id
router.get('/', isLoggedIn, habitGeneratorCtrl.show); //route: /api/habitgenerator
router.post('/', isLoggedIn, habitGeneratorCtrl.create); //route: /api/habitgenerator
router.put('/:id', isLoggedIn, habitGeneratorCtrl.update); //route: /api/habitgenerator/:id
router.delete('/:id', isLoggedIn, habitGeneratorCtrl.remove); //route: /api/habitgenerator/:id

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' });
}