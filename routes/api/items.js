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
        .then(item => res.json(item))
}); //represents actual endpoint using router

//@route POST api/items //Post Request
//@desc Add a Item
//@access Public

router.post('/', (req,res) => { //making a post request
    //construct an object to insert into database
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item)); //save it to database //gives it back the item that we saving and spit out item
});

//@route DELETE api/items/:id
//@desc DELETE a Item
//@access Public
router.delete('/:id', async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.json({ delete: true });
    } catch (err) {
        res.status(404).json({ delete: false });
    }
});

    
   


module.exports = router;