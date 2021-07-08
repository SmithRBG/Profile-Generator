const Engineer = require("../Util/engineer")

test ("Can set github constructor", () => {
    const myTest = "github";
    const eng = new Engineer("Gavin", 1, "Gavin@Jones.com", myTest)
    expect(eng.Github) .toBe(myTest)
})