function crash(code=0,message="Unknown error"){
    while(true){
        document.body.style.backgroundColor = "blue";
        document.body.innerHTML = `<h1><kbd>CRASH</kbd></h1><br/><p>Error Code:${code},${message}</p>`;
    }
}