import { model, Schema } from "mongoose";

const turnoSchema = Schema(
  {
    servicie: { type: String, require: true },
    profesional: { type: String, require: true },
    day: { type: String, require: true },
    hour: { type: String, require: true },
    price: { type: Number, require: true },
    signal:{type:String, require:true}
  },
  {
    timestamps: true,
  }
);

const Turno = model("Turno", turnoSchema);

export default Turno;
