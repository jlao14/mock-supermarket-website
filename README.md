# mock-supermarket-website
A full-stack e-commerce web application for a fictional supermarket, featuring user authentication, product categorization, and a fully functional shopping cart. This project demonstrates the integration of a frontend user interface with a backend database.

## Features
- **User Authentication:** Secure registration and login system built with PHP and MySQL. Checks for existing users and validates password confirmation.
  
- **Dynamic Shopping Cart:** Add items to the cart, update quantities, and proceed to checkout. The cart state is managed using JavaScript and the browser's `localStorage` so items persist across different pages.
  
- **Product Categories:** Organized sections for Fresh Produce, Meat & Poultry, Cleaning & Household, and Beauty & Personal Care.
  
- **Individual Product Pages:** Detailed view for specific items (like Apples and Bananas) allowing users to read descriptions, add to cart, or "Buy Now" for immediate checkout.
  
- **Custom UI Design:** Fully styled using custom CSS (no external frameworks), featuring responsive product grids, hover effects, and a clean navigation bar.

## Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** PHP
- **Database:** MySQL

## Prerequisites
Because this project uses PHP and a MySQL database for the login system, you cannot simply open the HTML files in your browser. You will need a local web server environment such as **XAMPP**, **WAMP**, or **MAMP**.

## Setup & Installation

### 1. File Placement
1. Install [XAMPP](https://www.apachefriends.org/index.html) (or your preferred local server).
2. Move this entire project folder into your local server's root directory:
   - For XAMPP: Move to `C:/xampp/htdocs/`
   - For MAMP: Move to `Applications/MAMP/htdocs/`

### 2. Database Setup
1. Start the **Apache** and **MySQL** modules in your XAMPP/MAMP control panel.
2. Open your browser and go to `http://localhost/phpmyadmin`.
3. Create a new database named `users`.
4. Inside the `users` database, run the following SQL query to create the necessary table:
   ```sql
   CREATE TABLE login (
       id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(50) NOT NULL,
       password VARCHAR(255) NOT NULL
   );
