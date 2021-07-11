const Intern = require("../Util/intern")

test ("Can set school constructor", () => {
    const myTest = "school";
    const eng = new Intern ("Gavin", 1, "Gavin@Jones.com", myTest)
    expect(eng.school) .toBe(myTest)
})