let mongoose = require('mongoose');

var schema = mongoose.Schema({
    customerId:
        {
            type:mongoose.SchemaTypes.ObjectId,
        },
    productId: 
        {
            type:mongoose.SchemaTypes.ObjectId,
        },
    amount: String,
    paymentStatus: String,
    reference: String,
    paymentDate:{
        type:Date,
        default: Date.now 
    }
   
        
}, { timestamps: true });

schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = new mongoose.model("payments", schema)