# CODE CHALLENEGE - VUE FRONT-END

## INSTALLATION & SETUP

To set up this project on your local machine, follow the steps below:

1. Clone the project code from this repository to a directory on your local machine.
2. In your terminal, cd into the project directory. Run the command "npm install" to install all of Vue's dependencies.
3. Lastly, run the command "npm run dev". The site should now be up and running at the following address "127.0.0.1:5173".

NOTE - both the Laravel and Vue projects should be running on the server together in order for the app to function.

If everything worked correctly, you should now be presented with the default Laravel homepage.


## KEY FOLDERS & FILES

A brief overview of the files and folders used in this project::

- services
    - customer.js -> this file contains all API calls/functions relating to Customers.

- src
    - router
        - index.js -> this file contains all the routes used in the app.

    - views
        - Customers
            - CustomerCreate.vue -> contains the template and setup scripts for creating a new Customer.
            - CustomerIndex.vue -> contains the template and setup scripts for for the list of all Customers - this acts as the homepage.
            - CustomerUpdate.vue -> contains the template and setup scripts for updating an already existing customer.
        
        - App.vue -> contains the overall app layout, including the header and main tags, as well as some css style classes.


## HOW TO USE THE APP

This app is (hopefully) very intuitive to use.

From the homepage you can view details for all of the currently existing customers. You can also search Customer details using the search input provided. (see 'Note 1' at bottom)

Clicking on the 'Create Customer' button will take you to a form where you can enter details for a new Customer. Clicking 'Submit' will add the customer to the database and redirect you back to the homepage. (see 'Note 2' at bottom)

Clicking on the 'Edit' button at the end of one of the Customer rows will take you to a form which is pre-populated with that Customer's details. Simply change the details as desired and click 'Update' to update that Customer. You will then be redirected back to the homepage.


Note 1 - the search input functionality has not yet been implemented.
Note 2 - while customers are added to the database successfully, an error occurs ("error.response is not defined...") which prevents you from being redirected back to the homepage. I'm still trying to solve this.