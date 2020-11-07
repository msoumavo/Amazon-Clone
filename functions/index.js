const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HgkLzJLLqvCKYyrDTehzaCYgUVKR5jn3kIWhGuueRGEaJ7DWRnBc3YrvY6AMJW1PEJnri8GKnbegnlrQ4ptZ5Km00KrV0CnBl')

// - API

// - App config
const app = express();

// - Middleware
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received! ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example ednpoint
// http://localhost:5001/challenge-8e55f/us-central1/api