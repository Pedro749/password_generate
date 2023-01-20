const button = document.getElementById('btnGenerate');
const passField = document.getElementById('field');

const sizeSelector = document.getElementById('size');
const sizeShow = document.getElementById('sizeShow');
sizeShow.innerHTML = sizeSelector.value;

sizeSelector.addEventListener('change', () => {
  sizeShow.innerHTML = sizeSelector.value;
});

function randonNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generate() {
  const upercase = document.getElementById('upercase').checked;
  const numbers = document.getElementById('number').checked;
  const symbols = document.getElementById('symbols').checked;
  const size = Number(document.getElementById('size').value);

  let password = '';

  while (true) {
    let charType = randonNumber(0, 3);
    
    switch(charType) {
      case 0:
        password += String.fromCharCode(randonNumber(97, 122));
        break
      case 1:
        if (upercase) {
          password += String.fromCharCode(randonNumber(65, 90));
        }
        break;
      case 2:
        if (numbers){
          password += randonNumber(0, 9);
        }
        break;
      case 3:
      if (symbols) {
        password += String.fromCharCode(randonNumber(33, 47));
      }
        break;
    }

    if (password.length == size) return password;
  }
  
}

button.addEventListener('click', () => {
  passField.innerHTML = generate();
});
