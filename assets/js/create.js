/**
 * Use the jQuery Validate plugin to add validation to the form
 *
 * Here's what this you will need to do:
 * 
 * 1. Include the following jQuery Validate JavaScript in layout.ejs
 *    <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.min.js"></script>
 *
 * 2. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  email      - required, use email validation
 *	  Home Phone - use phoneUS validation
 *	  Cell Phone - use phoneUS validation
 *	  Password   - required, 8 characters, 1 lowercase, 1 uppercase, 1 digit, and 1 specal char
 *	               REGEX: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^\&*\)\(+=._-])[0-9a-zA-Z!@#\$%\^\&*\)\(+=._-]{8,}$/
 *                   
 * 3. Use a custom message for password pattern validation
 *
 * 4. Make the color of the error text red
 *
 * 5. Add a Verify Password field to the form and add validation to make 
 *    sure the 2 password fields are equal to eachother
 * 
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 *
 */

 $(function(){
    $("#addEmployeeForm").validate({
        rules: {
            firstName: {
                required: true,
                minlength: 2
            },
            lastName: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            homePhone: {
                required: true,
                phoneUS: true
            },
            cellPhone: {
                required: true,
                phoneUS: true
            },
            password: {
                required: true,
                minlength: 8,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^\&*\)\(+=._-])[0-9a-zA-Z!@#\$%\^\&*\)\(+=._-]{8,}$/
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            }
        },
        errorClass: "text-danger",
        messages: {
            firstName: {
                required: "This field is required",
                minlength: "Must be at least two letters long"
            },
            lastName: {
                required: "This field is required",
                minlength: "Must be at least two letters long"
            },
            email: {
            	required: "This field is required",
                email: "Must be in the abc@abc.com format"
            },
            homePhone: {
            	required: "This field is required",
                homePhone: "555-555-5555"
            },
            cellPhone: {
            	required: "This field is required",
                cellPhone: "555-555-5555"
            },
            password: {
            	required: "This field is required",
                password: "Must have 1 capital 1 lowercase 1 special char and 1 number",
                minlength: "Must be at least 8 characters long"
            },
            confirmPassword: {
            	required: "This field is required",
            	equalTo: "Your password fields do not match"
            }
        },//messages
    });
 })