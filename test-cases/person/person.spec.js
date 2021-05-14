import Person from "./person"

describe("Person", () => {
    test("name returns full name", () => {
        const person = new Person({firstname: "Bahadır", lastname: "Avcı"});
        expect(person.name).toBe("Bahadır Avcı")
    })
})