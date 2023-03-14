const Employee = require("../lib/Employee");

test("Ensures employee was created", () => {
    const employee = new Employee("Dale", 123, "test@test.com");
    expect(typeof(employee)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue, "test@email.com");
    expect(e.id).toBe(testValue);
});

test("Can get email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee ("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "alice";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Charlie", testValue, "test@test.com");
    expect(e.getID()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Charlie", 123, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("Can get role via getRole()", () => {
    const e = new Employee("Charlie", 123, "test@test.com");
    expect(e.getRole()).toBe("Employee");
})