interface Greeting {
    message: string;
}

class HelloGreeting implements Greeting {
    message = "Hello! Is this working?";
}

function greet(greeting: Greeting) {
    console.log(greeting.message);
}

let greeting = new HelloGreeting();

greet(greeting);
