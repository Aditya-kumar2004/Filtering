# React Search & Filter Component

A clean, lightweight, and responsive React application demonstrating **real-time client-side search filtering**. It allows users to quickly search and filter through a list of 50 names with instant feedback.

---

## 🚀 Features

- **⚡ Real-Time Search**: Filters the list instantly as you type.
- **🔤 Case-Insensitive Matching**: Works whether you type in uppercase, lowercase, or mixed case.
- **🎨 Simple & Professional UI**: A clean, centered card design with smooth hover effects and a sleek scrollable list.
- **📱 Fully Responsive**: Looks great on both desktop and mobile screens.
- **⚡ Built with Vite**: Super-fast development and optimized build setup.

---

## 🛠️ Tech Stack

- **React 19** (Functional Components & `useState` hook)
- **Vite** (Next-generation frontend tooling)
- **CSS3** (Custom styling with Flexbox and modern design principles)

---

## 🧠 How It Works (Under the Hood)

1. **State Management**:
   We use React's `useState` hook to store the current input value:
   ```jsx
   const [search, setSearch] = useState("");
   ```

2. **Real-Time Filtering**:
   JavaScript's `.filter()` method checks whether each user's name includes the typed text:
   ```jsx
   const filterUser = users.filter((user) =>
     user.name.toLowerCase().includes(search.toLowerCase())
   );
   ```

3. **Dynamic Rendering**:
   The filtered list is rendered dynamically using the `.map()` function with unique `key` props:
   ```jsx
   {filterUser.map((user) => (
     <p key={user.id} className="user-card">
       {user.name}
     </p>
   ))}
   ```

---

## 📦 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Aditya-kumar2004/Filtering.git
   ```

2. **Navigate into the directory**:
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

5. Open your browser and go to `http://localhost:5173`.

---

## 📂 Project Structure

```text
Filtering/
├── src/
│   ├── App.jsx        # Search filtering logic & users dataset
│   ├── App.css        # Component styling & layout
│   ├── main.jsx       # App entry point
│   └── index.css      # Base styling
├── index.html         # HTML template
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

---

## 👤 Author

- **Aditya Kumar**
- GitHub: [@Aditya-kumar2004](https://github.com/Aditya-kumar2004)
