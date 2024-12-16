import { config } from "dotenv";

config();
// Step 1: Import the parts of the module you want to use
import { MercadoPagoConfig, Payment } from "mercadopago";

// Step 2: Initialize the client object
const client = new MercadoPagoConfig({
  accessToken: process.env.ACCESSTOKEN,
  options: { timeout: 5000, idempotencyKey: "abc" },
});

// Step 3: Initialize the API object
const payment = new Payment(client);

// Step 4: Create the request object
const body = {
  transaction_amount: 10.0,
  description: "Soro fisiologico",
  payment_method_id: "pix",
  payer: {
    email: "matheusfabiors@gmail.com",
  },
};

// Step 5: Create request options object - Optional
// const requestOptions = {
//   idempotencyKey: "<IDEMPOTENCY_KEY>",
// };

// Step 6: Make the request
payment.create({ body }).then(console.log).catch(console.log);
