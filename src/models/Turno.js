import { model, Schema } from "mongoose";

const turnoSchema = Schema({
  day: { type: String, require: true },
  hour: { type: String, require: true },
  servicie: { type: String, require: true },
},{
    timestamps:true
});


const Turno = model("Turno", turnoSchema);

export default Turno;