const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/stripe/charge", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "USD",
      description: "Purchase done in Fresh Minds",
      payment_method: id,
      confirm: true,
    });
    res.json({
      message: payment.id,
      success: true,
    });
  } catch (error) {
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
});

app.post("/stripe/refund", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const refund = await stripe.refunds.create({
      amount: amount,
      payment_intent: id,
    });
    res.json({
      message: "Refund Successful",
      success: true,
    });
  } catch (error) {
    res.json({
      message: "Refund Failed",
      success: false,
    });
  }
});

app.listen(process.env.PORT || 8080, () => {
});