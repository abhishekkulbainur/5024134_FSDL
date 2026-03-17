# StudentHub - Student Management System

A modern React + JavaScript application for managing student information with a beautiful dark-themed UI.

## 📁 Project Structure

```
week07_170326/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Navbar.jsx      # Navigation bar with stats
│   │   ├── RegisterForm.jsx # Form for adding/editing students
│   │   ├── StudentList.jsx # List of students with search
│   │   └── StudentCard.jsx # Individual student card
│   ├── hooks/
│   │   └── useStudents.js  # Custom hook for student logic & localStorage
│   ├── utils/
│   │   └── helpers.js      # Utility functions
│   ├── App.jsx             # Main component
│   ├── App.css             # Dark theme styling
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles
├── package.json            # Project dependencies
└── README.md               # This file
```

## 🚀 Quick Start

### Installation & Running

```bash
# Navigate to the project directory
cd week07_170326

# Install dependencies (if not already installed)
npm install

# Start the development server
npm start

# The app will open at http://localhost:3001
```

### Building for Production

```bash
npm run build
```

## ✨ Features

- ✅ **Add Students** - Register new students with name, course, and year
- ✏️ **Edit Students** - Modify existing student information
- 🗑️ **Delete Students** - Remove students with confirmation
- 🔄 **Toggle Status** - Mark students as Active/Inactive
- 🔍 **Search & Filter** - Find students by name or course
- 📊 **Statistics** - View total and active student counts
- 💾 **Local Storage** - Data persists across browser sessions
- 🎨 **Dark Theme** - Modern dark-themed UI with smooth animations
- 📱 **Responsive** - Works on desktop and mobile devices

## 🛠️ Tech Stack

- **React 18** - UI library
- **JavaScript** - Programming language
- **CSS3** - Styling with custom dark theme
- **React Hooks** - State management
- **Local Storage API** - Data persistence

## 📚 Key Concepts Used

### JavaScript Concepts
- **Arrow Functions** - Compact function syntax
- **Destructuring** - Extract values from objects
- **Spread Operator** - Clone and merge objects
- **Template Literals** - String interpolation
- **Array Methods** - Map, filter, reduce
- **Async/Await** - Handle asynchronous operations

### React Concepts
- **Functional Components** - Modern React approach
- **Hooks** - useState, useEffect for state management
- **Custom Hooks** - useStudents for business logic
- **Props** - Pass data between components
- **Controlled Components** - Form inputs
- **Conditional Rendering** - Show/hide elements
- **Event Handling** - User interactions
- **Ternary Operators** - Inline conditionals

## 💡 How It Works

1. **Navbar** - Displays app title and student statistics
2. **Register Form** - Add new or edit existing students
3. **Search Box** - Filter students in real-time
4. **Student Cards** - Display each student's information with action buttons
5. **Year Stats** - Show distribution of students across years
6. **Local Storage** - Automatically saves all changes

## 🎓 Learning Path

1. Start with `src/App.jsx` to understand the main component structure
2. Check `src/hooks/useStudents.js` for state management patterns
3. Review individual components in `src/components/` to see React patterns
4. Examine `src/utils/helpers.js` for JavaScript utility functions
5. Explore `src/App.css` for CSS styling and layout

## 📝 Available Scripts

- `npm start` - Run development server (port 3001)
- `npm build` - Create production build
- `npm test` - Run tests
- `npm eject` - Expose configuration (not reversible)

## 🎨 Styling

The app features:
- **Dark Theme** - Easy on the eyes
- **Custom Color Palette** - Purple, yellow, green accents
- **Smooth Animations** - Hover effects and transitions
- **Responsive Grid** - Auto-fitting cards
- **Typography** - Syne and DM Sans fonts

## 🔄 Data Flow

```
App.jsx (main component)
  ↓
  useStudents hook (custom hook)
    ↓
    ├─ Students state
    ├─ addStudent, editStudent, deleteStudent, toggleStatus
    └─ localStorage persistence
  ↓
  ├─ Navbar (displays stats)
  ├─ RegisterForm (creates/edits data)
  └─ StudentList → StudentCard (displays students)
```

## 📦 Dependencies

- react@^18.2.0
- react-dom@^18.2.0
- react-scripts@5.0.1

## 🐛 Troubleshooting

**Port already in use?**
```bash
PORT=3002 npm start
```

**Node modules corrupted?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**App not loading?**
- Clear browser cache
- Check console for errors (F12)
- Verify all files are in correct directories

## 👨‍💻 Development Tips

- Use React Developer Tools browser extension
- Check Console tab in DevTools for errors
- Use `console.log()` for debugging
- Ensure all component files have .jsx or .js extension

---

**Happy Learning! 🎓**
