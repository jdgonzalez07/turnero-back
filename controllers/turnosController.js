import Turno from "../models/Turno.js";

const turnosController = {
  getAllTurnos: async (req, res, next) => {
    let turnos;
    let success = true;
    try {
      turnos = await Turno.find();

      res.json({
        res: turnos,
        success,
      });
    } catch (error) {
      console.log(error);
      success = false;
      next(error);
    }
  },

  getOneTurno: async (req, res, next) => {
    const { id } = req.params;
    let turno;
    let success = true;
    try {
      turno = await Turno.findById(id);
      console.log(turno);
      res.json({
        res: turno,
        success,
      });
    } catch (error) {
      console.log(error);
      success = false;
      next(error);
    }
  },

  createTurno: async (req, res, next) => {
    console.log(req.body);
    let turno;
    let success = true;
    try {
      turno = await Turno.create(req.body);
      res.json({
        res: turno,
        success,
      });
    } catch (error) {
      console.log(error);
      success = false;
      next(error);
    }
  },
};

export default turnosController;
