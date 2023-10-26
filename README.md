# pharmacy management system

# Features

1. Products
2. Product categories
3. Purchases
4. Sales
5. Supplier
6. Reports
7. Access Control (roles and permissions)
8. Users
9. User Profile
10. Settings (Application settings)
11. Dashboard

# Installation
 Follow these steps to install the application.
1. Clone the Repository
```
git clone https://github.com/mostofa-s-cse/versity-project.git
```
2. Go to project directory

```
cd Pharmacy-management-system
```

3. Install packages with composer

```
composer install --ignore-platform-reqs
```

4. Install npm packages with 
```
npm install; npm run dev
```
5. Create your database 

7. Set database connection to your database in the .env file.
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=pharmacy
DB_USERNAME=root
DB_PASSWORD=
```
9. Import full database sql file in the database folder, or run migrations
Use this command to run migrations

php artisan migrate --seed

10. Start the local server and browser to your app.
This command will start the development server

php artisan serve

11. Open the address in the terminal in your browser.Usually address is usually like this:

http://127.0.0.1:8000


