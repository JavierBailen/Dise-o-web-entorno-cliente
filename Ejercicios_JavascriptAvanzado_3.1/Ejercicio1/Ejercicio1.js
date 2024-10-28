let personaJson = '{"Nombre":"Javier","Edad":15,"Ciudad":"TorredonCani"}';

let personaJavascript = JSON.parse(personaJson);
console.log(personaJavascript.Nombre);
console.log(personaJavascript.Ciudad);