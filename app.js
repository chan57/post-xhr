
const containerr = document.querySelector('.container');
const containeR = document.querySelector('.tasks-list-section')
const form = document.forms['addTask'];

const inputName = form.elements['name'];
const inputEmail = form.elements['email'];
console.log(inputEmail)
const inputPhone = form.elements['phone'];
const inputWebsite = form.elements['website'];
const btnAddUser = document.querySelector('.btn-primary');


form.addEventListener('submit', submitF);

function onFormSubmitHandler(response) {
    
    const nameValue = inputName.value;
    const emailValue = inputEmail.value;
    const phoneValue = inputPhone.value;
    const websiteValue = inputWebsite.value;

    if (!nameValue || !emailValue) {
      alert('Пожалуйста введите user');
      return;
    }

    //form.reset();
    return cardTemplate(nameValue, emailValue, phoneValue, websiteValue)

    
  }

function createPost(body, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://jsonplaceholder.typicode.com/users');
  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

  xhr.addEventListener('error', () => {
    console.log('error');
  });

xhr.send(JSON.stringify(body));
}


function cardTemplate(name1, email1, phone1, site1) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const name = document.createElement('h5');
  name.classList.add('card-name');
  name.textContent = `${name1}`;
  
  const email = document.createElement('h5');
  email.classList.add('card-email');
  email.textContent = `${email1}`;

  const phone = document.createElement('h5');
  phone.classList.add('card-phone');
  phone.textContent = `${phone1}`;

  const website = document.createElement('h5');
  website.classList.add('card-website');
  website.textContent = `${site1}`;


  cardBody.appendChild(name);
  cardBody.appendChild(email);
  cardBody.appendChild(phone);
  cardBody.appendChild(website);
  card.appendChild(cardBody);
  return card;
}

function submitF(e){
    e.preventDefault();

const newPost = onFormSubmitHandler()
  createPost( newPost, response => {

    const card = onFormSubmitHandler(response);
    containerr.insertAdjacentElement('afterbegin', card);
  });

}