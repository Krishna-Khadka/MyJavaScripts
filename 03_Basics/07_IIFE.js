// Immediately Invoked Function Expression

// suppose we have a database connection file and we want to sart the connection as soon as the application start. int his case IIFE is used

//wrap the functio definition by () and call it by ()

//Named IIFe
(function output(){
    console.log(`Hello World`);
})();

//Unnamed IIFE
(() => {
    console.log("Hello again")
})();

//Unnamed IIFE with parameter
((name)=> {
    console.log(`This is IIFE with parameter developed by ${name}`);
})('Krishna');

// Always end the IIFE with semicolon i.e ;