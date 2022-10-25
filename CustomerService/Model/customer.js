let mongoose = require('mongoose');

var schema = mongoose.Schema({
    customer_name: String,
    email: String,
    phone: String,
    address: String,
    location: String,
        
}, { timestamps: true });

schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = new mongoose.model("customers", schema)