const somethingWillHappen = () =>{
    return new Promise((resolve,reject) =>{
        if(true){
            resolve('Hey!')
        }else{
            reject('Whoopss!');
        }
    });
}

somethingWillHappen().then(resp=>{
    console.log(resp)
}).catch(error =>  {console.error(error)});


const somethingWillHappen2 = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(()=>{
                resolve(true);
            },2000);
        }else{
            const error = new Error('Whoops!');
            reject(error);
        }
    });
}

somethingWillHappen2().then(resp=>{
    console.log(resp)
}).catch(error =>  {console.error(error)});

Promise.all([somethingWillHappen(),somethingWillHappen2()]).then(resp=>{
    console.log(`Array of results ${resp}`)
}).catch(err =>{console.error(err)});