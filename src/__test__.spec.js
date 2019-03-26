import { commentCountToString } from './utils/commentCountToString'
import { capitalise } from './utils/capitalise';
import { formatSlug } from './utils/formatSlug';

describe('commentCountToString', () => {
    it('should return a string', () => {
        expect(commentCountToString('0')).toBe('0 comments');
    });
    it('should return correct number in string', () => {
        expect(commentCountToString('5')).toBe('5 comments');
    });
    it('should not include "s" when commentCount is 1', () => {
        expect(commentCountToString('1')).toBe('1 comment');
    });
});

describe('capitalise', () => {
    it('should take a single word and capitalise first letter', () => {
        expect(capitalise('hello')).toBe('Hello');
    });
    it('should capitalise first letter of every word in multi-word string', () => {
        expect(capitalise('hello-there-world')).toBe('Hello There World');
    });
    it('should lowercase all other letters', () => {
        expect(capitalise('hELlo-WORLD')).toBe('Hello World');
    });
});

describe('formatSlug', () => {
    it('should replace spaces with hyphens', () => {
        expect(formatSlug('hello world')).toBe('hello-world')
    });
});