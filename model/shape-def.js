const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shpapedefSchema = new Schema({
    shape_number:{
        type : Number,
        required : [true, 'Required Field'],
    },
    shanpe_name :{
        type : String,
        required :[true, 'Required Field'],
    },
},
{
    timestamps: {
        createdAt : true,
        updatedAt : true,
    },
})

module.exports=mongoose.model('Shapedef',shpapedefSchema);