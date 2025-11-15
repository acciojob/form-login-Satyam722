function getFormvalue(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Get form values using document.forms
    const form = document.forms[0];
    const firstName = form.elements['fname'].value.trim();
    const lastName = form.elements['lname'].value.trim();
    
    // Check if both fields are filled
    if (firstName === '' || lastName === '') {
        alert('Please fill in both First Name and Last Name fields.');
        return;
    }
    
    // Concatenate and display full name
    const fullName = `${firstName} ${lastName}`;
    alert(fullName);
}