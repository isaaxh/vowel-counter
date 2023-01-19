const form = document.querySelector('#form');

console.log(form);

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputValue = document.querySelector(".text-input").value;
    
    console.log(inputValue);

    if (!inputValue === '' || !inputValue === null) {
    }
});

