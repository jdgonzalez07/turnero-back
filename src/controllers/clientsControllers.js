import Client from "../models/Client.js";

const clientsController = {
  getClients: async (req, res) => {
    let clients;
    let success = true;
    try  {
      clients = await Client.find();
      res.json({
        res: clients,
        success
      })
    } catch (error) {
      console.log(error)
      success = false;
    }
  },
};

export default clientsController;
