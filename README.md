# BookStore
![1](https://user-images.githubusercontent.com/83335769/125054798-37d74a00-e0c4-11eb-84d0-7d2276fe8880.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

## Decription
This codebase was created to demonstrate a fully fledged application built with Angular that interacts with an actual backend server including CRUD operations and is complimented with State Management by using features of angular like NGRX, RXJS.

## Server Link

https://mockapi.io/projects/60cafc1f21337e0017e43752

## How It Works

Book store management system is an application in Angular, which provides you features to Add Book, Edit Book, and Delete Book with the help of CRUD Operations.

## State management system of Angular

![image](https://user-images.githubusercontent.com/83335769/125053448-bb903700-e0c2-11eb-90c3-1ba830bcad4b.png)

## Functionality Overview

1.	There are three components namely: AppComponent, EditComponent and NewBookComponent

2.	Application consists of one service: BookService which consists of all the method required to communicate with the web server.

3.	There is one folder called as Store which consists of all the Actions, Reducer and Effects used in the application. 

4.	AppComponent displays all the books present on the Web Server. Books are fetched via RestApi call ‘GET’.

5.	EditComponent will get all the details of the book which you wish to edit and the book is updated via RestApi ‘PUT’ call.

6.	NewBookComponent will provide you a UI which will ask for book details you want to add to store.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Reference document

[Book Store.docx](https://github.com/rucha-patki/BookStore/files/6790283/Book.Store.docx)
