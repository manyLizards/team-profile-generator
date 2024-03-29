const Engineer = require("../lib/Engineer");

test("Ensures engineer was initialized", () => {
    const engineer = new Engineer("Steven", 3, "imacrystalgem@email.com", "www.github.com/mruniversejr")

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})