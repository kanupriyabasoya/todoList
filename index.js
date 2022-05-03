const todoText = document.querySelector('.todo-form input[type=text]');
const todoUl = document.querySelector('ul');

document.addEventListener('submit',(e)=>{
e.preventDefault();
const inputText = todoText.value;
const newLi = document.createElement('li');
newLi.innerHTML = `<input type="checkbox" name="" id=""> ${inputText}`
todoUl.append(newLi);
todoText.value='';
});

todoUl.addEventListener('click',(e)=>{
    e.target.classList.toggle('checked');
});