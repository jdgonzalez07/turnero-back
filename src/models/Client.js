import {Schema, Types, model} from "mongoose";

const clientSchema = new Schema({
    name:{type: String, require:true},
    lastName:{type: String, require:true},
    dni:{type: Number, require:true},
    email:{type:String,require:true},
    age:{type:Number, require:true},
},{
    timestamps:true,
});

const Client = model("client", clientSchema)

export default Client;

