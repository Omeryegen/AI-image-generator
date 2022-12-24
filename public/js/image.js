
const err = document.querySelector('.error');
const button = document.querySelector('#button');
const selection = document.querySelector('#selection');
const image = document.querySelector('.output');
const prompt = document.querySelector('#prompt');


const addSpinner = ()=>{
    const spinner = document.createElement('span');
    image.appendChild(spinner);
    spinner.className = 'loader'
};
const deleteSpinner = ()=>{
    document.querySelector('.loader').remove();
};
const fetchImage = async ()=>{
   
    image.innerHTML = "";
    err.textContent = "";
    addSpinner();
    button.disabled = true;
    try{    
        const response = await fetch( "https://puzzled-goat-sarong.cyclic.app/", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            prompt: prompt.value,
            size: selection.value
        }),
        });
        if (!response.ok) {
            throw new Error('That image could not be generated');
          }
        const data = await response.json();
        const url = data.data;
        const element = document.createElement('img');
        element.src = url;
        image.appendChild(element);
    }catch(error){
        err.textContent = error;
    }
    deleteSpinner();
    button.disabled = false;   
};




button.addEventListener('click', function(){
    
   fetchImage(); 
   
});
