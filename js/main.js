const button = document.getElementById('btnGenerate');
const passField = document.getElementById('field');

const sizeSelector = document.getElementById('size');
const sizeShow = document.getElementById('sizeShow');

const copy = document.getElementById('copy');

sizeShow.innerHTML = sizeSelector.value;

sizeSelector.addEventListener('change', () => {
  sizeShow.innerHTML = sizeSelector.value;
});

function setTextWithTiming(element, text) {
  const previousText = element.innerHTML;
  element.innerHTML = text;

  const interval = setTimeout(() => {
    element.innerHTML = previousText;
  }, 1500);
}

copy.addEventListener('click', () => {
  const pass = passField.value;
  
  if (pass === '') return;

  try {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(pass);
    } else {
        passField.setSelectionRange(0, passField.value.length);
        document.execCommand("copy");
    }
    setTextWithTiming(copy, 'Copiado!');

  } catch (e) {
    console.log('Erro ->', e);
  } 
  
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
  passField.value = generate();
  copy.style.display = 'block';
});
