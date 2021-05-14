import Model from "./model";

test("new work", () => {
    expect(new Model).toBeInstanceOf(Model)
});

test("modal structure", () => {
    expect(new Model).toEqual(expect.objectContaining({
        $collection: expect.any(Array),
        all: expect.any(Function),
        find: expect.any(Function),
        record: expect.any(Function),
        update: expect.any(Function)
    }))
});

describe("record", () => {
    const hereos = [{id: 1, name: "John Wick"}, {name: "Terminator"}];

    test("can add data to the collection", () => {
        const model = new Model();
        model.record(hereos);
        expect(model.$collection).toEqual([
            hereos[0],
            {
                id: expect.any(Number),
                name: hereos[1].name
            }
        ]);
    });

    test("gets called when data is passed to Model", () => {
        const spy = jest.spyOn(Model.prototype, 'record');
        const model = new Model(hereos);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
})

describe("all", () => {
    test("returns empty model", () => {
        const model = new Model();
        expect(model.all()).toEqual([]);
    })

    test("returns model data", () => {
        const model = new Model([{ name: "John Wick" }, { name: "Terminator" }]);
        expect(model.all().length).toEqual(2);
    })

    test("original data stays intact", () => {
        const model = new Model([{ name: "John Wick" }])
        const data = model.all()
        data[0].name = "Porky";

        expect(model.$collection[0].name).toBe("John Wick")
    })
})

describe("find", () => {
    const hereos = [{ id:1, name: "John Wick" }, { name: "Terminator" }]

    test("returns null if nothing matches", () => {
        const model = new Model();
        expect(model.find(1)).toEqual(null)
    })

    test("if find returns a matching entry", () => {
        const model = new Model(hereos);
        expect(model.find(1)).toEqual(hereos[0]);
    })
})

describe("update", () => {
    const heroesAndVillains = [{ id: 1, name: 'Batman' }]
    let model

    beforeEach(() => {
        const dataset = JSON.parse(JSON.stringify(heroesAndVillains))
        model = new Model(dataset)
    })

    test('an entry by id', () => {
        model.update(1, { name: 'Joker' })
        expect(model.find(1).name).toBe('Joker')
    })

    test('extend an entry by id', () => {
        model.update(1, { cape: true })
        expect(model.find(1)).toEqual(
            expect.objectContaining({
            name: 'Batman',
            cape: true
            })
        )
    })

    test('return  false if no entry matches', () => {
        expect(model.update(2, {})).toBe(false)
    })
})