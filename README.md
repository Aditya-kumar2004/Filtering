# React Search & Filter Components

A clean, responsive React project demonstrating **real-time client-side search filtering**. It includes both **Single-Input Filtering** and **Multi-Field (Name, Category, Price) Filtering**.

---

## 🚀 Features

- **⚡ Real-Time Instant Filtering**: Fast, client-side filtering as you type without page reloads.
- **🎯 Multi-Criteria Search**: Filter products simultaneously by **Name**, **Category**, and **Price**.
- **🔤 Partial & Case-Insensitive Matching**: Type uppercase, lowercase, or partial words/numbers.
- **🎨 Clean SaaS UI**: Centered card layout, aligned table columns (Name, Category, Price), and smooth hover effects.
- **📱 Responsive Layout**: Toolbar and table automatically adapt to mobile and desktop screen sizes.

---

## 🛠️ Tech Stack

- **React 19** (Functional Components & `useState` hook)
- **Vite** (Fast dev server and bundling)
- **CSS3** (Modern CSS Grid & Flexbox)

---

## 📂 Implementations Included

### 1. Multi-Field Filtering (`Multiple_items_filtering.jsx` & `App.jsx`)
Filter products across multiple independent fields:
- **Name Search** (`string`)
- **Category Search** (`string`)
- **Price Search** (`number` converted to `string`)

#### How Multi-Filter Works:
```jsx
// 3 separate search states
const [nameSearch, setNameSearch] = useState("");
const [categorySearch, setCategorySearch] = useState("");
const [priceSearch, setPriceSearch] = useState("");

// Combines all 3 conditions using &&
const filterProducts = products.filter((item) => {
  const matchesName = item.name.toLowerCase().includes(nameSearch.toLowerCase());
  const matchesCategory = item.category.toLowerCase().includes(categorySearch.toLowerCase());
  const matchesPrice = item.price.toString().includes(priceSearch);

  return matchesName && matchesCategory && matchesPrice;
});
```

> **Why `.toString()` for Price?**  
> Numbers in JavaScript do not have the `.includes()` method. Converting the number to a string (`item.price.toString()`) allows partial matching as you type numbers into an input field (e.g. typing `5` matches `50000`).

---

### 2. Basic Single-Input Filtering (`Basic_filtering.jsx`)
A single search bar that searches through a list of 50 users by both **Name** and **Email**:
```jsx
const filterUser = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase()) ||
  user.email.toLowerCase().includes(search.toLowerCase())
);
```

---

## 📦 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Aditya-kumar2004/Filtering.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd Filtering
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. Open your browser at `http://localhost:5173`.

---

## 📂 Project Structure

```text
Filtering/
├── src/
│   ├── App.jsx                     # Active component (Product multi-filtering)
│   ├── App.css                     # Modern CSS styles & grid layout
│   ├── Multiple_items_filtering.jsx# Multi-field filtering (Name, Category, Price)
│   ├── Basic_filtering.jsx         # Single-input user filtering (50 users)
│   ├── main.jsx                    # React root entry point
│   └── index.css                   # Global styles
├── index.html                      # HTML template
├── package.json                    # Project metadata & scripts
└── README.md                       # Project documentation
```

---

## 👤 Author

- **Aditya Kumar**
- GitHub: [@Aditya-kumar2004](https://github.com/Aditya-kumar2004)
