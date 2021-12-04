var request = new XMLHttpRequest();
request.open('GET','http://api.countrylayer.com/v2/language/deu?access_key=e446d8ff943f8ea0776d9998c727d53a');

request.send();
request.onload =function () {
    var data = JSON.parse(this.response); 
    for(i=0;i<data.length;i++) {
        console.log(data[i]);
    }   
}