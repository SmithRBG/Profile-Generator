const Manager = require("../Util/manager")

test ("Can set office number constructor", () => {
    const myTest = "office";
    const eng = new Manager ("Gavin", 1, "Gavin@Jones.com", myTest)
    expect(eng.office) .toBe(myTest)
})