const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// set Static path
app.use(express.static(path.join(__dirname, "client")))

app.use(bodyParser.json);

const publicVapidKey = 'BDLfHGkFuzztS1e3cON1rGYFP1HPIERPFnc5wxtX8war7XZy2Niyjfnr3f3BQ_izJkAkElj9vXYXxsEh0kybWyE';
const privateVapidKey = 'XM4UWX7S4f2MTgh9yd09NbGjDG9u-zJ3aE0WD2sAjvk';

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

//Subscribe Route
app.post('/subscribe', (req, res) => {
    // Get pushSubscriptionObject

    const subscription = req.body;

    // Send 201 - resource created
    res.status(201).json({});

    // Create payload
    const payload = JSON.stringify({ title: 'Push Test'})

    // Pass object into sendNotification
    webpush.sendNotification(subscription, payload).catch(err => console.log(err))
});

const port = 5000;

console.log(`App listen to ${port}`)
app.listen(port)
