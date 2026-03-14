# 📚 Library Management System

A simple Library Management System prototype built as part of a technical assignment.

The system allows users to manage books, memberships, and fine payments with validation rules according to the provided requirements.

---

## 🚀 Features

### Issue Book
- Book name required
- Author auto-populated and non-editable
- Issue date auto-filled with today's date
- Return date automatically set to 15 days ahead
- Return date cannot exceed 15 days
- Remarks optional

### Return Book
- Book name required
- Author auto-populated
- Serial number mandatory
- Issue date auto-filled and non-editable
- Confirm return redirects to Pay Fine page

### Pay Fine
- Displays calculated fine amount
- Fine calculated based on late return
- If fine exists, user must confirm fine payment
- Transaction completes after confirmation

### Membership Management
- Add membership
- Duration options:
  - 6 months (default)
  - 1 year
  - 2 years
- All fields mandatory

### Book Management
- Add Book / Movie
- All fields mandatory
- Validation for missing inputs

### User Management
- New user creation
- Existing user management
- Name is mandatory

---

## 🛠 Tech Stack

- Node.js
- Express.js
- EJS
- HTML/CSS
- JavaScript

---

## 📂 Project Structure
library-management-system
│
├── server.js
├── package.json
│
├── views
│ ├── home.ejs
│ ├── issueBook.ejs
│ ├── returnBook.ejs
│ ├── payFine.ejs
│ ├── addMembership.ejs
│ └── addBook.ejs
│
└── public
└── style.css  

---

## ▶️ How to Run

1. Clone the repository
git clone https://github.com/yas15sh/library-management-system.git




2. Install dependencies


npm install


3. Run the server


node server.js


4. Open in browser


http://localhost:3000


---

## ⚙️ Assumptions

- Serial number of each book is unique.
- Fine is calculated as **₹10 per day** after the return date.
- Author name is auto-populated from book data.
- Return date default is **15 days from issue date**.

---

## 📌 Future Improvements

- MongoDB database integration
- Authentication system
- Admin dashboard
- Book search functionality
- REST API support

---

## 👨‍💻 Author

Developed by **Yash Saini**
