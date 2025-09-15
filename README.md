# 🛒 E-Commerce Website

An **E-commerce web application** built with **HTML, CSS, JavaScript, Node.js, Express**, and **Firebase** for database and authentication. This project provides a simple yet functional platform where users can browse products, add them to cart, and place orders.  

---

## 🚀 Features  

- 👤 **User Authentication** (Login & Signup with Firebase)  
- 📦 **Product Listing** with details (images, description, price)  
- 🛍️ **Add to Cart & Checkout** functionality  
- 🔑 **Secure Authentication** (Firebase Auth)  
- 📱 **Responsive Design** (HTML, CSS, JS)  
- 🌐 **Backend API with Express**  
- ☁️ **Firebase Realtime Database / Firestore** for data storage  

---

## 🛠️ Tech Stack  

### Frontend  
- **HTML5**  
- **CSS3** (Responsive design, animations)  
- **JavaScript (Vanilla JS)**  

### Backend  
- **Node.js**  
- **Express.js**  

### Database & Auth  
- **Firebase** (Firestore / Realtime DB + Authentication)  

---

## 📂 Project Structure  

```
ecommerce-website/
│── public/           # Static assets (CSS, JS, Images)
│── views/            # HTML templates
│── routes/           # Express route handlers
│── app.js            # Main server file
│── package.json      # Dependencies
│── firebase.js       # Firebase config & setup
│── README.md         # Documentation
```

---

## ⚙️ Installation & Setup  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/Akhil866/ecommerce-website.git
cd ecommerce-website
```

### 2️⃣ Install dependencies  
```bash
npm install
```

### 3️⃣ Setup Firebase  
- Go to [Firebase Console](https://console.firebase.google.com/)  
- Create a new project  
- Enable **Authentication** and **Firestore / Realtime Database**  
- Copy your Firebase config and update it in `firebase.js`  

```js
// firebase.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 4️⃣ Run the server  
```bash
npm start
```

Server will start at:  
👉 `http://localhost:3000`

---


## 🤝 Contributing  

Contributions are welcome!  
1. Fork the repo  
2. Create a new branch (`feature-new`)  
3. Commit changes  
4. Push to your fork & create a PR  

---

## 📜 License  

This project is licensed under the **MIT License**.  
