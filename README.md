

## 🛒 ProMayoufTech eCommerce  — MERN + Redux Toolkit

A full-featured eCommerce app built using the MERN stack (MongoDB, Express, React, Node.js) and Redux Toolkit. Developed as part of Brad Traversy’s course, this version modernizes the project with improved state management and fixes.



### 🚀 Features

* Shopping cart with PayPal & credit card support
* Product reviews, search, ratings, and pagination
* User profiles, order history
* Admin controls for products, users, and orders
* Image uploads, seeding database, and more

---

### ⚙️ Getting Started

#### 1. **Environment Setup**

Rename `.env.example` → `.env` and add:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
PAYPAL_CLIENT_ID=your_client_id
PAGINATION_LIMIT=8
```

#### 2. **Install Dependencies**

```bash
npm install
cd frontend
npm install
```

#### 3. **Run Dev Server**

```bash
npm run dev     # Runs both frontend (port 3000) and backend (port 5000)
```

---

### 🛠️ Build & Deploy

```bash
cd frontend
npm run build   # Builds frontend for production


### 🌱 Seed / Wipe Database

```bash
npm run data:import   # Seeds users/products
npm run data:destroy  # Wipes database
```

**Sample Accounts:**

* Admin: `admin@email.com` / `123456`
* Users: `john@email.com`, `jane@email.com`








