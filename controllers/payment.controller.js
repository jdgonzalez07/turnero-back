import { MercadoPagoConfig, Preference } from "mercadopago";

const paymentController = {
  createOrder: async (req, res, next) => {
    try {
      const client = new MercadoPagoConfig({
        accessToken: process.env['ACCESS_TOKEN'],
      });

      const body = {
        items: [
          {
            title: req.body.title,
            unit_price: Number(req.body.unit_price),
            quantity: Number(req.body.quantity),
            currrency_id: "ARS",
          },
        ],
        back_urls: {
          success: "https://portfolio-juan-gonzalez.web.app/",
          failure: "https://portfolio-juan-gonzalez.web.app/",
          pending: "https://portfolio-juan-gonzalez.web.app/",
        },
        auto_return: "approved",
      };

      const preference = new Preference(client);
      const result = await preference.create({ body });
      res.json({
        id: result.id,
      });
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).send("Error creating order");
    }
  },

  receiveWebhook: (req, res) => {
    console.log(req.query);
    res.send("Webhook");
  },
};

export default paymentController;
