$(document).ready(function() {


    //add span element after every input and format with class "error"
    $(":text").after("<span class = error>*</span>");

    //move focus to arrival date textbox
    $("#arrival_date").focus();

    // This is the event handler for the onclick event of the button "submit request"
    $("#reservation_form").submit(
        function(event) {
            var isValid = true;
            //validate arrival date
            var arrival = $("#arrival_date").val();
            if (arrival == "") {
                $("#arrival_date").next().text("This field is required.");
                isValid = false;
            } else {
                $("#arrival_date").next().text("");
            }

            //validate night entry
            var nightPattern = /^[0-9]/;
            var night = $("#nights").val();
            if (night == "") {
                $("#nights").next().text("This field is required.");
                isValid = false;
            } else if ( !nightPattern.test(night) ) {
                $("#nights").next().text("This field must be numeric.");
                isValid = false;
            } else {
                $("#nights").next().text("");
            }

            //validate the name entry
            var name = $("#name").val().trim();
            if (name == "") {
                $("#name").next().text("This field is required.");
                isValid = false;
            }   else {
                $("#name").val(name);
                $("#name").next().text("");
            }


            //validate the email entry
            var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
            var email = $("#email").val();
            if (email == "") {
                $("#email").next().text("This field is required.");
                isValid = false;
            } else if ( !emailPattern.test(email) ) {
                $("#email").next().text("Must be a valid email address.");
                isValid = false;
            } else {
                $("#email").next().text("");
            }

            //validate phone
            var phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            var phone = $("#phone").val();
            if (phone == "") {
                $("#phone").next().text("This field is required.");
                isValid = false;
            } else if ( !phonePattern.test(phone) ) {
                $("#phone").next().text("Please follow pattern.");
                isValid = false;
            } else {
                $("#phone").next().text("");
            }

            //cancel if any entry is invalid
            if (isValid == false) {
                event.preventDefault();
            }
        }

    );
}); // end ready
