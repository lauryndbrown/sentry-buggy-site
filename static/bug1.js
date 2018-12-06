function showHello(message){
    document.getElementById("hello").innerHTML = message;
}

function sayHello(){
    var name = document.getElementById("name").value;
    if(name.length < 1)
        var goodDayWorld = 'Hello Sentry! You got it right!!!';
    else
        var helloWorld = `Hello ${name}!`;
    showHello(helloWorld);
}
