const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shapesSchema = new Schema({
    shapeId:{
        type: Number,
        required :[true, 'Required Field'],
    },
    shape : {
        type : String,
        required : [true, 'Required Field'],  
    },
    createdy : {
        type : String,
        required : [true , ' Required Field'],
    },
    last_modified_by:{
        type: String,
        required : [true, 'Required Field'],
    },
},
{
    timestamps: {
        createdAt : true,
        updatedAt : true,
    },
});

module.exports=mongoose.model('Shapes',shapesSchema);