# Finance Dashboard UI

This project is a clean and responsive Finance Dashboard built using React (Vite) and JavaScript.
The goal of this project is to present financial information in a simple and intuitive way that even non-technical users can easily understand.

The dashboard allows users to view financial summaries, analyze spending patterns, manage transactions, and gain insights from data.

---

## Tech Stack

React (Vite)
JavaScript (ES6)
CSS (modern responsive design)
Recharts (for data visualization)
UUID (for unique transaction IDs)

---

## Features

### 1. Dashboard Overview

The overview section provides a quick summary of financial information using simple cards:

• Total Balance
• Total Income
• Total Expense

These values automatically update when transactions are added, edited, or deleted.

---

### 2. Data Visualizations

Two types of visualizations help users understand financial patterns:

Balance Trend Chart
Shows how financial values change over time.

Expense Category Chart
Displays how expenses are distributed across categories.

Charts are responsive and readable on both desktop and mobile devices.

---

### 3. Transactions Management

Users can view and manage financial transactions with the following features:

View list of transactions
Search transactions by category
Add new transaction (Admin role)
Edit existing transaction
Delete transaction

Each transaction includes:

Date
Category
Amount
Type (Income or Expense)

All changes automatically update dashboard values and charts.

---

### 4. Role Based UI (Simulated)

The dashboard includes a simple role switcher:

Viewer Role
Can only view data

Admin Role
Can add, edit, and delete transactions

This demonstrates understanding of role-based UI behavior without requiring backend authentication.

---

### 5. Insights Section

The insights section provides simple useful observations:

Highest spending category
Total number of transactions

This helps users quickly understand spending behavior.

---

### 6. State Management

Application state is handled using React hooks:

useState for managing:

transactions data
user role
form inputs

useEffect for:

saving data in local storage
loading saved data on refresh

Local storage ensures data persistence without requiring a backend.

---

### 7. User Experience

The interface is designed to be:

simple
clean
easy to understand
mobile friendly

Key UX improvements include:

clear section separation
readable typography
consistent spacing
responsive layout
visible data hierarchy
hover feedback on buttons and cards
form validation for empty inputs
friendly empty state message

---

### 8. Responsiveness

The dashboard works well on:

mobile phones
tablets
laptops
large screens

Responsive design ensures:

charts fit screen width
table scrolls on smaller devices
form fields stack properly on mobile

---

### 9. Code Structure

The project follows modular component structure:

components/
SummaryCards.jsx
Charts.jsx
Transactions.jsx
RoleToggle.jsx
Insights.jsx

Each component has a single responsibility, making the code easier to maintain and extend.

---

### 10. Edge Case Handling

The application handles common edge cases:

empty transactions list
empty search results
invalid form input
missing category values
data persistence after refresh

These improvements ensure stable user experience.

---

## How to Run Project

Install dependencies:

npm install

Start development server:

npm run dev

Open browser:

http://localhost:5173

---

## Project Goal

This project demonstrates the ability to:

design intuitive user interfaces
structure frontend applications
manage application state
handle user interactions
build responsive layouts
write clean and maintainable code

---

## Future Improvements

Possible enhancements include:

dark mode
backend integration
authentication system
data export functionality
advanced filtering
analytics insights

---

This project focuses on clarity, usability, and maintainable frontend architecture.
