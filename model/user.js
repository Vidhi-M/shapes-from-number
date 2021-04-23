const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        unique : true,
        required :[true,'Required Field'],
    },
    password:{
        type: String,
        required : [true,'Required Field'],
    },
    number_of_Shapes_created:{
        type: Number,
        required :[true, 'Required Field'],
    },
},
    {
        timestamps: {
            createdAt : true,
            updatedAt : true,
            
        },
});

module.exports=mongoose.model('User',userSchema);
