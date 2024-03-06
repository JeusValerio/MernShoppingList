const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

//@route Get api/items
//@desc Get All Items
//@access Public

router.get('/', (req,res) => {
        Item.find()
        .sort ({date: -1 }) //descending
        .then(items => res.json(items))
}); //represents actual endpoint using router

//@route POST api/items //Post Request
//@desc Add a POST
//@access Public

router.post('/', (req,res) => { //making a post request
    //construct an object to insert into database
    const newItem = new Item({
        name: req.body.name
    });
});


module.exports = router;