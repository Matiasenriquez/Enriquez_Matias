// Ejercicio 1:
// Crear archivo llamado “english.js” y subir a su repositorio en GitHub de la tarea anterior, si
// aún no lo tiene deberá crearlo. Dicho archivo contendrá dos segmentos de código, en primer lugar, un
// Objeto JS que represente el perfil profesional de una persona del ámbito IT y luego deberán escribir
// una Función que reciba un perfil como parámetro. Dicha función hará uso de esos datos para
// concatenando distintas partes del objeto para para devolver una presentación del mismo en inglés.

// Ejemplo del mensaje que debe retornar la función:
// Hello! My name is John Smith. I am a Frontend Developer. I work with
// HTML, CSS, and JavaScript. I live in Posadas. I am 30 years old.

let devProfile = {
  name: "Alejandro",
  second_name: "Matias",
  surname: "Enriquez",
  email: "matiasenriquez@mail.com",
  isEmployed: false,
  age: 27,
  tecnologies: ["Html", "Css", "Javascript", "Python"]
}
function presentation(profile) {
  console.log("Hello!, My name is ", profile.name, profile.second_name, profile.surname,", I'm a fullstack developer and I work with: ", profile.tecnologies, ". I have ", profile.age, " years old and if you want to work with me, you can write me at: ", profile.email)
}
presentation(devProfile)