# Instagram Profile Viewer (Node.js + Express + EJS)

This is a simple backend project built using **Node.js**, **Express.js**, and **EJS** templating engine. It dynamically renders Instagram-style profile pages using data from a local JSON file.

---

## 🛠 Features

- Renders user profiles based on JSON data
- Uses EJS to dynamically populate HTML pages
- Displays profile details: name, followers, following, and posts (with likes/comments)
- Custom error page for invalid usernames
- Nodemon enabled for development

---

## 🧩 Project Structure

```
├── data.json           # Static data for profiles
├── index.js            # Express server entry point
├── views/
│   ├── instagram.ejs   # Template for valid profiles
│   └── error.ejs       # Template for invalid users
├── package.json        # Project metadata & dependencies
├── package-lock.json   # Exact dependency versions
```

---

## 🚀 How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/garimaakashyap/instagram-profile-viewer.git
   cd instagram-profile-viewer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   nodemon index.js
   ```

4. Open in browser:
   ```
   http://localhost:3000/id/cats
   http://localhost:3000/id/dogs
   http://localhost:3000/id/invalid   → will render error.ejs
   ```

---

## 📦 Dependencies

- express
- ejs
- nodemon

---

## ✍ Author

Garima Kashyap

---

## 📃 License

ISC
