# React-Project-Defence - Online Marketplace

Project defence for Softuni by Tervel Gavrilov
Softuni React Project - Project Defense Single Page Application - Online Marketplace, using React for the Frontend (FE) and softuni-practice-server for the Backend (BE).

FUNCTIONALITY:
--------------------------
The project is an online marketplace, where people can view and buy products.

Users can view all products on the home/calatog page. 
They can also go to the details page of the products and see all the information about said item.
They can also view the comments.

Logged-in users can place comments on all offers, as well as delete their own comments.
They can buy the desired articles, which are placed in their Cart page.
Guests are not able to comment or buy.

Logged-in users can add new products in the AddProduct page. There is a validation, which
checks if the fields ( name, category, price, condition ) are empty and shows an error message.
The additional information field can be left empty. The URL will be replaced by default "No Image"
picture if left empty.
Logged in users, can Delete or Edit their own offers. There is also validation on the Edit page.

Logged-in users can view their Cart page, which shows all the products in their basket.
If they dont want any item, they can delete them, or they can check the Details , by clicking on the
article's name or picture, which redirects them to the Details page.
The Cart page also calculates the total amount of all products in their cart.
Guests do not have a cart page and can't access it.

Login and Register pages use validation. If any field is empty or the length is too short, an error message
pops up under the fields. An additional error message is shown if there is error with the server response 
   ( For example if user with this email already exists )

All users can use the Search function, which shows all products matching the name.

If there is no path matching the url, a 404 Error page is shown.

Technologies used:
-----------------------
HTML, CSS

Javascript

React


HOW TO START:
--------------------------
Go to client terminal and type `npm create vite .` for the client application.

`npm install`

`npm run dev`

Go to server terminal and run "node server.js" for the backend server.
