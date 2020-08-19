let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//no usamos fetch por que fetch ya contiene promesas y el  objetivo del curso es aprender todo sobre asincronismo

function fetchData(url_api,callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET',url_api,true);
    xhttp.onreadystatechange = (event) =>{
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error '+ url_api);
                return callback(error,null);
            }
        }
    }
    xhttp.send();
}

