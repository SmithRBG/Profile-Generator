const Engineer = require("../Util/engineer")

test ("Can set github constructor", () => {
    const myTest = "github";
    const eng = new Engineer("Shenilla", 1, "Shenilla@smith.com", myTest)
    expect(eng.Github).toBe(myTest)
})