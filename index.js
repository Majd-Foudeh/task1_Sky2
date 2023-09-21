let form = document.getElementsByTagName("form");
form[0].addEventListener("submit", function (e) {
  e.preventDefault();

  let payment = document.getElementById("payment");
  let arNumber = document.getElementById("arNumber");
  let category = document.getElementById("category");
  let companyName = document.getElementById("companyName");

    let success = true
    
    const ErrorArNumber = document.getElementById("ErrorArNumber");
    if (arNumber.value === "") {
      ErrorArNumber.textContent = "This Field is requierd";
        arNumber.classList.add("is-invalid");
        success=false
    } else {
      ErrorArNumber.textContent = "";
        arNumber.classList.remove("is-invalid");
        success= true
    }

    const ErrorCompanyName = document.getElementById("ErrorCompanyName");
    const companyNameRegex = /^[a-zA-Z\s]*$/;

    if (companyName.value === "") {
      ErrorCompanyName.textContent = "This Field is requierd";
        companyName.classList.add("is-invalid");
        success=false

    } else if (!companyNameRegex.test(companyName.value)) {
      ErrorCompanyName.textContent =
        "This Field Cant have numbers or special characters";
        companyName.classList.add("is-invalid");
        success=false

    } else {
      ErrorCompanyName.textContent = "";
        companyName.classList.remove("is-invalid");
        success= true

    }

    const errorCompany = document.getElementById("errorCompany");
    if (category.value === "") {
      errorCompany.textContent = "This Field is requierd";
        category.classList.add("is-invalid");
        success=false

    } else {
      errorCompany.textContent = "";
        category.classList.remove("is-invalid");
        success= true

    }

    const ErrorPayment = document.getElementById("ErrorPayment");
    if (payment.value === "") {
      ErrorPayment.textContent = "This Field is requierd";
        payment.classList.add("is-invalid");
        success=false

    } else {
      ErrorPayment.textContent = "";
        payment.classList.remove("is-invalid");
        success= true

    }
  
    if (success) {
        alert("form submitted successfully");
        console.log("form submitted successfully");
    }
      

});
