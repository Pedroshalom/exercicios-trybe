const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

function handleChangeTech(event) {
    const techElement = document.querySelector('.tech');
    techElement.classList.remove('tech');
    event.target.classList.add('tech');
    input.value = '';
  }
  
  firstLi.addEventListener('click', handleChangeTech);
  secondLi.addEventListener('click', handleChangeTech);
  thirdLi.addEventListener('click', handleChangeTech);
  

input.addEventListener('input', function(event){
const techElement = document.querySelector('.tech');
techElement.innerText = event.target.value;
});

 myWebpage.addEventListener('dblclick', function() {
    window.location.replace('https://www.linkedin.com/in/pedro-manoel-santos/');
});

myWebpage.addEventListener('mouseover', function(event) {
    event.target.style.color = 'red';
  });

  myWebpage.addEventListener('mouseout', function(event) {
event.target.style.color = 'unset';
  });

