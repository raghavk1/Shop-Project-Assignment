### 🛍️ React + Redux Product Dashboard
A responsive Product Dashboard built using React, Redux Toolkit, and Testing Libraries.
This project demonstrates modern frontend architecture — including global state management, async data fetching, filtering, and testing best practices — using data from the Fake Store API.

⚙️ Project Structure
src/
├── components/
│   └── SearchBar.jsx
|   └── ProductCard.jsx
├── hooks/
│   └── useDebounce.js
├── pages/
│   ├── ProductPage.jsx
│   ├── ProductDetailsPage.jsx
│   └── FavoritesPage.jsx
├── redux/
│   ├── favourites/
│   │   ├── slice.js
│   ├── filters/
│   │   └── slice.js
│   ├── products/
│   │   └── slice.js
│   │   └── /test
│   │        └──productsSlice.test.jsx 
│   └── store.js
├── App.js
└── main.jsx
└── index.css


🚀 Features
🧱 Product Listing Page :
1. Displays all products in a responsive grid layout
2. Search by product title (with custom debounce hook)
3. Filter by category & sort by price (ascending/descending)
4. Uses Redux for state management and data flow

📄 Product Detail Page :
1. Shows full product information
2. Add to favorites (button disables after adding)
3. Shows a toast message when added successfully

❤️ Favorites Page :
1. Lists all favorited products (synced with Redux store)
2. Remove from favorites directly
3. Displays empty state message if no items

🧩 Global State Management
1. Built with Redux Toolkit using slices, actions, selectors
2. Async fetching via createAsyncThunk
3. Separate slices for products, favorites and filters

💅 UI / Styling :
1. Responsive layout built using pure CSS (no frameworks)


### Concepts Used
1. React functional components & hooks (useState, useEffect, useSelector, useDispatch)
2. Redux Toolkit slice pattern (createSlice, createAsyncThunk)
3. Custom reusable hooks (for debounce)
4. Debounced search input for performance
5. Toast notifications for UX feedback
6. Conditional rendering and responsive design
7. Test file for products slice 


🛠️  SETUP
# 1️⃣ Clone the repository
git clone https://github.com/raghavk1/Shop-Project-Assignment.git
cd Shop

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start development server
npm run dev

# 4️⃣ Start testing 
npm test
