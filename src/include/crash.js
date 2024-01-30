function crash(code=0,message="Unknown error"){
    document.body.style.backgroundColor = "blue";
    document.body.innerHTML = `<h1><code>CRASH</code></h1><br/><p><code>Error Code:${code},${message}</code></p>`;
    const fs = require('fs');
    const filename = toString(Math.floor(Date.now() / 1000)) + "_crash.log";
    fs.writeFile(filename, `${code},${message}`, 'utf8', (err) => {});
}