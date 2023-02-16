const Manager = require("../lib/Manager");

test("ensures manager is created", () => {
    const manager = new Manager("Greg", 200, "mruniverse@email.com", 1)

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})