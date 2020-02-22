const { Router } = require('express');
const router = Router();
const User = require('../models/User');


const { getUsers,createUser, deleteUser } = require('../controllers/users.controller');

router.route('/')
    .get(getUsers)
    .post(createUser);
    
router.route('/:id')
    .delete(deleteUser)
    .get(async (req, res) => {
    try {
        
        const users_dt = await User.find({ Nombre: req.params.id });
        res.json(users_dt);
       
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
    });
    
module.exports = router;
