let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//no usamos fetch por que fetch ya contiene promesas y el  objetivo del curso es aprender todo sobre asincronismo


const fetchData = (url_api) =>{
    return new Promise((resolve,reject)=>{
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET',url_api,true);
        xhttp.onreadystatechange = (event) =>{
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    :reject(new Error('Error '+ url_api));
                
            }
        }
        xhttp.send();
    });
}

module.exports = fetchData;