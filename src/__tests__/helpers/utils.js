import * as utils from '../../helpers/utils';

describe('Test utilities', () => {
    test('timeConvert() should convert minutes to h m format', () => {
        expect(utils.timeConvert(190)).toMatch('3h 10 min');
    });

    test('`getMonthString()` should return full month', () => {
        expect(utils.getMonthString(0)).toMatch('January');
    });

    describe('Test image path fixer utilities', () => {
        const movie = {
            backdrop_path: '/backdrop_path',
            poster_path: '/poster_path',
        };

        const result = {
            backdrop_path: 'https://image.tmdb.org/t/p/w1280/backdrop_path',
            poster_path: 'https://image.tmdb.org/t/p/w300/poster_path',
        }

        test('`updateImagePathWithBaseURL()` to return images path from tmdb cdn', () => {
            expect(utils.updateImagePathWithBaseURL(movie)).toEqual(result);
        });
    
        test('`updateMoviesImagePath()` to return images path from tmdb cdn', () => {
            const movies = { results: [movie] };
    
            const results = [result];
    
            expect(utils.updateMoviesImagePath(movies)).toEqual(results);
        });
    });
    
});