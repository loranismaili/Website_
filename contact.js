
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Thank you for your message!');
    }
});



$('#btn3').click(function(){
    $('.hidden').show('fast');
});
$('#btn4').click(function(){
    $('.hidden').hide();
});


const toggleButton = document.getElementById('btn-toggle');
const body = document.body;

toggleButton.addEventListener('click', function() {
    
    body.classList.toggle('coffe-theme');
   
    if (body.classList.contains('coffe-theme')) {
        toggleButton.textContent = 'Classic Theme';
    } else {
        toggleButton.textContent = 'Coffe Theme';
    }
});
