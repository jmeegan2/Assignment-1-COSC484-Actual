function checkPassword(form) {

    password1 = form.password1.value;
    password2 = form.password2.value;

    // If password not entered
    if (password1 == '')
        alert ("Please enter Password");
          
    // If confirm password not entered
    else if (password2 == '')
        alert ("Please enter confirm password");
          
    // If Not same return False.    
    else if (password1 != password2) {
        alert ("\nEnsure Passwords Match")
        return false;
    }

    // If same return True.
    else{
        form.action="results.html";
        return true;
    }

      // Capture the form data
  const formData = new FormData(form);

  // Create a URLSearchParams object to store the form data
  const params = new URLSearchParams();

  // Iterate over the form data and add it to the URLSearchParams object
  for (const pair of formData.entries()) {
    params.append(pair[0], pair[1]);
  }

  // Redirect to the results.html page with the form data as URL parameters
  window.location.href = "results.html?" + params.toString();

  // Prevent form submission
  return false;
}

function copyBillingAddress() {
    if (document.getElementById("sameAsBilling").checked) {
      // Copy values from billing address fields to delivery address fields
      document.getElementById("deliveryFirstname").value = document.getElementById("firstname").value;
      document.getElementById("deliveryLastname").value = document.getElementById("lastname").value;
      document.getElementById("deliveryStreetAddress").value = document.getElementById("streetaddress").value;
      document.getElementById("deliveryCity").value = document.getElementById("city").value;
      document.getElementById("deliveryState").value = document.getElementById("state").value;
    } else {
      // Clear delivery address fields
      document.getElementById("deliveryFirstname").value = "";
      document.getElementById("deliveryLastname").value = "";
      document.getElementById("deliveryStreetAddress").value = "";
      document.getElementById("deliveryCity").value = "";
      document.getElementById("deliveryState").value = "";
    }
  }

  