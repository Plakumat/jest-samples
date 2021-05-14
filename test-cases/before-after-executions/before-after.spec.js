import movies from "./before-after"

// --> Multiple duplicated function test is not best practice

/*
describe("My Favorite Movies", () => {
test("can add a movies", () => {
    const myMovies = [{
        title: "Terminator",
        rate: null
    }];

    movies.add(myMovies, "John Wick");
    expect(myMovies).toMatchSnapshot();
});

test("rate a movie", () => {
    const myMovies = [{
        title: "Terminator",
        rate: null
    }];

    movies.rate(myMovies[0], 5);
    expect(myMovies).toMatchSnapshot();
});


})
*/

describe('Favorite Movies', () => {
    let myMovies = []
    beforeEach(() => {
        myMovies = [{
        title: 'Terminator',
        rate: null
        }]
    })

    test('can add a movie', () => {
        movies.add(myMovies, 'John Wick')
        expect(myMovies).toMatchSnapshot()
    })

    test('rate a movie', () => {
        movies.rate(myMovies[0], 5)
        expect(myMovies).toMatchSnapshot()
    })
})