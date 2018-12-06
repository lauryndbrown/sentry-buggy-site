function say_hello(){
    name = document.getElementById("name").value;
    if(name.length < 1)
        goodDayWorld = 'Hello Sentry! You got it right!!!';
    else
        helloWorld = `Hello ${name}!`;
    showHello(helloWorld);
}

function showHello(message){
    document.getElementById("hello").innerHTML = message;
}