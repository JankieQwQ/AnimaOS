class app{
    constructor(this,name,url,id){
        this.name = name;
        this.url = url;
        this.id = id;
        this.download = false;
    }
    download(this) {
        const fs = require('fs');
        const https = require('https');
        const file = fs.createWriteStream('./app/' + this.name);
        const request = https.get(this.url + '/index.js', function(response) {
            response.pipe(file);
            file.on('finish', function() {
                file.close(function() {
                    this.download = true;
                    return true;
                });
            });
        }).on('error', function(err) {
            fs.unlink('./app/' + this.name);
            return false;
        });
    }
    run(this){
        try{
            if(this.download){
                window.open(this.url);
            }else{
                var task = require('./app/' + this.name);
            }
            task.main();
        }catch(err){
            console.error(`App Error:${err}.`);
        }
    }
}