//first typewriter app
var app = document.getElementById('app');
    var typewriter = new Typewriter(app, {
    autoStart:true,
    delay:45,
    deletespeed:30,
    loop: false,
     });
    typewriter.typeString('Hi')
    .pauseFor(1500)
     .deleteAll()
     .typeString('My name is Joer')
    .pauseFor(500)
    .deleteChars(1)
    .typeString('y')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Welcome to my website!')
    .pauseFor(750)
    .typeString(' Use the menu below to get the information you are looking for, or hover over for a summary')
    .start();
//second typewriter app
var app2 = document.getElementById('app2');
    var typewriter2 = new Typewriter(app2, {
        autoStart:true,
        delay:45,
        deleteSpeed:10,
        loop: false,
    });
    typewriter2.typeString("Currently I'm looking for more projects programming with HTML, CSS, Python & Javascript.")
        .pauseFor(1500)
        .typeString(' My interests lie in ')
        .pauseFor(500)
        .typeString('new technology')
        .pauseFor(500)
        .deleteChars(14)
        .typeString('Cloud Engineering')
        .pauseFor(500)
        .deleteChars(17)
        .pauseFor(750)
        .typeString(' progr')
        .deleteChars(5)
        .typeString('learning how things work and building stuff.')
        .start();
//third typewriter app
var app3 = document.getElementById('app3');
    var typewriter2 = new Typewriter(app3, {
        autoStart:true,
        delay:45,
        deleteSpeed:10,
        loop: false,
    });
    typewriter2.typeString("Hey that's me!")
        .pauseFor(1500)
        .typeString(" As it says above, I'm really into podcasts & Tech!")
        .start();
//fourth app
var app4 = document.getElementById('app4');
    var typewriter4 = new Typewriter(app4, {
        autoStart:true,
        delay:45,
        deleteSpeed:10,
        loop: false,
    });
    typewriter4.typeString("Drop me a line below and I'll try to get back to you as soon as I can!")
        .start();
var app5 = document.getElementById('app5');
var typewriter5 = new Typewriter(app5, {
    autoStart:true,
    delay:45,
    deleteSpeed:10,
    loop: false,
});
typewriter5.typeString("Click any of the boxes to learn more about the project/experience.")
    .pauseFor(1500)
    .deleteChars(66)
    .typeString("This website was actually part of the \"Cloud Resume Challenge\" by Forrest Brazeal. It's hosted securely on AWS, the view counter uses a Dynamo DB table & API Gateway. It has continuous deployment on Github. Click my head to read my blog post about it!")
    .start();
//Date at top
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y ;

