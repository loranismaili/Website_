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
