import movies from "./single-skip-test"

describe('Favorite Movies', () => {
    let myMovies = []
    beforeEach(() => {
        myMovies = [{
        title: 'Terminator',
        rate: null
        }]
    })

    //Jest will test only this case
    test.only('can add a movie', () => {
        movies.add(myMovies, 'John Wick')
        expect(myMovies).toMatchSnapshot()
    })

    //Jest will skip this case
    test.skip('rate a movie', () => {
        movies.rate(myMovies[0], 5)
        expect(myMovies).toMatchSnapshot()
    })
})