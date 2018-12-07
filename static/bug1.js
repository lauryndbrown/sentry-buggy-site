function sayHello(name){
    var helloWorld = '';
    if(name.length < 1)
        helloWorld = `Hello Sentry! You got it right!!!`;
    else
        helloWorld = `Hello ${name}!`;
    showHello(helloWorld);
}
