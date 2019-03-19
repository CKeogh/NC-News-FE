import capitalise from '../utils/capitalise';
import { expect } from 'chai';

describe('capitalise', () => {
    it('should take a single word and capitalise first letter', () => {
        expect(capitalise('hello')).to.equal('Hello');
    });
});