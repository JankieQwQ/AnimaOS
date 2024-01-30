function crash(code=0,message="Unknown error"){
    document.body.style.backgroundColor = "blue";
    document.body.innerHTML = `<h1><code>CRASH</code></h1><br/><p><code>Error Code:${code},${message}</code></p>`;
}