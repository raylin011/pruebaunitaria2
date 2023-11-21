// hola_mundo.test.js

const holaMundo = require("./index");

test("comprobacion de mensaje de saludo", () => {
    expect(holaMundo()).toBe("hola, mundo");

});