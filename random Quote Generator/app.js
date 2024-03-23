function getRandomQuote(){
    fetch('http://api.quotable.io/random')
    .then(response =>response.json())
    .then(data =>{
        displayQuote(data.content)
    })
    .catch(error =>{
        console.log('Error fetching quote :',error)
    })
}


function displayQuote(quote){
    document.getElementById('quote').textContent = quote;
}