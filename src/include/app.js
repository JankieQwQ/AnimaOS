class app{
    constructor(this,name,url,id){
        this.name = name;
        this.url = url;
        this.id = id;
    }

    download(){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (request.readyState === 4){
                if (request.status === 200) {
                    // Todo: dump request.responseText
                }
                else{return false;}
            }
    }
}