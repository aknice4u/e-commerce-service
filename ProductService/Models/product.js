let mongoose = require('mongoose');

var schema = mongoose.Schema({
    product_name: String,
    amount: String,
    quantity: String,
    
        
}, { timestamps: true });

schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = new mongoose.model("products", schema)