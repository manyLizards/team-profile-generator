const { Employee } = require("../lib/Employee");

test("Ensures employee was created", () => {
    const employee = new Employee("Peridot", 333, "techrules@gmail.com")

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})