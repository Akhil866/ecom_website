const express = require('express');
const path = require('path');

// create express app
const app = express();

// static path
let staticPath = path.join(__dirname, "public");

// middlewares
app.use(express.json());             // handle JSON request bodies
app.use(express.static(staticPath)); // serve static files

// home route
app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// signup page
app.get("/signup", (req, res) => {
  res.sendFile(path.join(staticPath, "signup.html"));
});
// signup page
app.post('/signup', (req, res) => {
  console.log(req.body);
  res.json('data recieved');
})


// 404 page
app.get('/404', (req, res) => {
  res.sendFile(path.join(staticPath, "404.html"));
});

// fallback (any route not found)
app.use((req, res) => {
  res.redirect('/404');
});

// start server
app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
