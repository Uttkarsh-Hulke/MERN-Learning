# Student Records Search

## About the Project

This is a simple student records website made using HTML, CSS, and JavaScript.

The website displays student details in cards and provides a search option to find students by their name.

## Features

* Displays student information in cards
* Shows student name, marks, class, and address
* Allows students to be searched by name
* Search results update while typing
* Responsive layout for different screen sizes
* Uses JavaScript `map()` and `filter()` methods

## Technologies Used

* HTML
* CSS
* JavaScript

## Project Structure

```text
Student-Records/
│
├── index.html
├── index.css
└── script.js
```

## How It Works

Student information is stored in an array of objects in JavaScript.

The `map()` method is used to display the student information on the webpage.

The `filter()` method is used to find students based on the text entered in the search box.

For example:

```js
let result = students.filter(function(student) {
    return student.name.toLowerCase().includes(searchText);
});
```
## How to Run
1. Open the project in VS Code.
2. Make sure `index.html`, `index.css`, and `script.js` are in the same folder.
3. Open `index.html` in a browser.
4. Enter a student's name in the search box to search.

## What I Learned
Through this project, I practiced:
* JavaScript arrays
* JavaScript objects
* `map()`
* `filter()`
* `includes()`
* DOM manipulation
* Event listeners
* Template literals
* CSS Grid
* Responsive design
## Author

Uttkarsh
