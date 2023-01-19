const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputString = document.querySelector(".text-input").value;
    const modelText = document.querySelector(".model-text");
    const errorElement = document.querySelector(".error-element");
    let message = [];
    let errorMessage = [];
    
    if (inputString === '' || inputString === null) {
        e.preventDefault();
        errorMessage.push("Please enter a text");
    } else {
        e.preventDefault();
        errorElement.innerText = '';
        const characters = inputString.split('');
        let vowels = [];
        for(let i = 0; i < characters.length; i++) {
            if (characters[i] === 'a' || characters[i] === 'e' ||
            characters[i] === 'i' || characters[i] === 'o' ||
            characters[i] === 'u'){
                vowels.push(characters[i]);
            }
        }

        message.push(`There are ${vowels.length} vowels in this text.`);
        modelText.innerText = message.join(', ');

        showModel();
    }


    if(errorMessage.length > 0) {
        errorElement.innerText = errorMessage.join(', ');
    }
});

function showModel(){
    const modelContainer = document.querySelector('.model-container')
    modelContainer.style.opacity = '100%';
    modelContainer.style.pointerEvents = 'auto';
}

function closeModel(){
    const modelContainer = document.querySelector('.model-container')
    modelContainer.style.opacity = '0%';
    modelContainer.style.pointerEvents = 'none';
    document.querySelector('.text-input').value = '';
}