# Odin Library Project

## Overview
In this project, we will be extending the 'Book' example and turn it into a small Library App. 

## Steps

    1. Set up project with skeleton HTML/CSS and JS files
    2. All book objects will be stored in an array, so add a function to the script that can take user's input and store the new book objects into an array.
    3. Write a function that loops through the array and displays each book on the page. 
        i. You can display them in some sort of table, or each on their own “card”. 
        ii. It might help for now to manually add a few books to your array so you can see the display.
    4. Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.
    5. Add a button on each book’s display to remove the book from the library.
        i. You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
    6. Add a button on each book’s display to change its read status.
        i. To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.
