let count = 0;

function increment () {
  $('#qtdEmployee').html(count++)
}

function decrement () {
  $('#qtdEmployee').html(count--)

  if(count < 0) {
    count = 0
  }
}

function sendForm() {
  const fullname = document.querySelector('#fullName').value;
  const email = document.querySelector('#email').value;
  const sendSuccess = document.querySelector('#success');
  const buttonSend = document.querySelector('#sendForms');
  
  if( fullname.length >= 10 && email.length >= 10 ) {
    sendSuccess.classList.remove('d-none')
    sendSuccess.classList.add('d-flex')
    buttonSend.disabled = true;
  };

  if( fullname == "" || fullname.length < 10 ) {
    $('#errorName').removeClass("d-none");
  } else {
    $('#errorName').addClass("d-none");
  }
  
  if( email == "" || email.length < 10 ) {
    $('#errorEmail').removeClass("d-none");
  } else {
    $('#errorEmail').addClass("d-none");
  }
};

document.querySelector('#fullName').addEventListener('change', () => {
  if( $('#fullname') == "" || $('#fullname') < 10 ) {
    $('#errorName').removeClass("d-none");
  } else {
    $('#errorName').addClass("d-none");
  }
});

document.querySelector('#email').addEventListener('change', () => {
  if( $('#email') == "" || $('#email') < 10 ) {
    $('#errorEmail').removeClass("d-none");
  } else {
    $('#errorEmail').addClass("d-none");
  }
});







