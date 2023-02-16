const Intern = require("../lib/Intern");

test("Ensures intern was created", () => {
    const intern = new Intern("Lapis", 24, "idrathernotbehere@email.com", "gem school")

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})