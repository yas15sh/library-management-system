# 📚 Library Management System

A **Library Management System** built using **Node.js, Express.js, and EJS** that follows a modular architecture based on **Maintenance, Reports, and Transactions modules**.
The system allows users and administrators to manage library operations such as adding books, issuing books, returning books, and handling fines.

---

# 🚀 Features

### 🔐 Login System

* Two types of users:

  * **Admin**
  * **User**
* Password field is hidden while typing.
* After login, users are redirected to the **Category of Books (Dashboard)**.

---

# 🧭 Application Flow

The system follows the structure defined in the project flowchart.

```
Start
 ↓
Login Screen
 ↓
Category of Books (Dashboard)
 ↓
Maintenance | Reports | Transactions
```

---

# 🛠 Maintenance Module (Admin Access Only)

This module allows administrators to manage books and memberships.

Functions included:

* Add Membership
* Update Membership
* Add Book / Movie
* Update Book / Movie

Maintenance operations help maintain library records.

---

# 📊 Reports Module (User & Admin Access)

The reports module provides information about library activity.

Available reports:

* Active Issues
* Master List of Memberships
* Master List of Movies
* Master List of Books
* Overdue Returns
* Pending Issues Requests

These reports help track library operations.

---

# 🔄 Transactions Module (User & Admin Access)

Handles day-to-day library activities.

Functions included:

* Check Book Availability
* Issue Book
* Return Book
* Fine Payment

### Transaction Flow

```
Check Book Availability
 ↓
Issue Book
 ↓
Return Book
 ↓
Fine Payment (if applicable)
```

---

# 📅 Issue Book Rules

When issuing a book:

* Book name is required
* Author name is automatically populated
* Issue date **cannot be earlier than today's date**
* Return date is automatically set to **15 days after issue date**
* Remarks are optional

---

# 📦 Return Book Rules

When returning a book:

* Book name is required
* Author name auto populated
* Serial number required
* Issue date auto populated
* Return date can be adjusted if necessary

After confirming return, the user is redirected to **Fine Payment**.

---

# 💰 Fine Payment

Fine payment is required if the book is returned late.

Fields include:

* Book Name
* Member Name
* Fine Amount
* Fine Paid checkbox
* Remarks

If a fine exists, the user must check **Fine Paid** before completing the return.

---

# 🖥 Technologies Used

* **Node.js**
* **Express.js**
* **EJS (Embedded JavaScript Templates)**
* **HTML**
* **CSS**

---

# 📁 Project Structure

```
library-management-system
│
├── server.js
├── package.json
├── README.md
│
├── public
│   └── style.css
│
└── views
    ├── login.ejs
    ├── home.ejs
    ├── maintenance.ejs
    ├── reports.ejs
    ├── transactions.ejs
    │
    ├── addBook.ejs
    ├── updateBook.ejs
    │
    ├── addMembership.ejs
    ├── updateMembership.ejs
    │
    ├── issueBook.ejs
    ├── returnBook.ejs
    ├── payFine.ejs
    └── checkAvailability.ejs
```

---

# ▶️ How to Run the Project

### 1️⃣ Clone the Repository

```
git clone https://github.com/yas15sh/library-management-system.git
```

### 2️⃣ Navigate to the Project Folder

```
cd library-management-system
```

### 3️⃣ Install Dependencies

```
npm install
```

### 4️⃣ Run the Server

```
node server.js
```

### 5️⃣ Open in Browser

```
http://localhost:3000
```



GitHub:
https://github.com/yas15sh

---

# 📄 License

This project is developed for **educational purposes** as part of a technical assignment.


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
