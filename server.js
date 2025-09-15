const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

//firebase admin setup
let serviceAccount = require("./clothing-ecommerce-website-firebase-adminsdk-fbsvc-8637c379cc.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


let staticPath = path.join(__dirname, "public");

// middlewares
app.use(express.json()); // ✅ required to parse JSON data
app.use(express.static(staticPath));

// home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
});

// signup route (GET)
app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
});

// signup route (POST)
app.post('/signup', (req, res) => {
   console.log("data received ✅");
    console.log(req.body);   // also log the actual form data if you want

    res.json({ message: "data received" }); 
});

// 404 route
app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
});

app.use((req, res) => {
    res.redirect('/404');
});

app.listen(3000, () => console.log("listening on port 3000..."));
