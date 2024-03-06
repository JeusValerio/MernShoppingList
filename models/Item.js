const mongoose = require ('mongoose');
const Schema = mongoose.Schema; //Keys represent data properties, and values define their expected data types (like string, number, etc.) or even nested objects for more complex structures.

//Create schema
const ItemSchema = new Schema({
name: {
    type:String,
    required: true
},
Date:{
    type: Date,
    default: Date.now
}
});

module.exports = Item = mongoose.model('item', ItemSchema);