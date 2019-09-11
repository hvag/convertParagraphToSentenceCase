const expect = require('chai').expect
const convert = require('./index')

describe('converts paragraph to sentence case', () => {
    it('should convert all lower case paragraph', () => {
        expect(convert('the quick brown fox jumps over the lazy dog. it barked! really?')).to.equal
            ('The quick brown fox jumps over the lazy dog. It barked! Really?')
    })
    it('should convert all upper case paragraph', () => {
        expect(convert('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. IT BARKED! REALLY?')).to.equal
            ('The quick brown fox jumps over the lazy dog. It barked! Really?')
    })
    it('should convert mixed case paragraph', () => {
        expect(convert('THE quick brown fox JUMPS OvEr ThE lAzY DOG. IT BarkeD! REALLY?')).to.equal
            ('The quick brown fox jumps over the lazy dog. It barked! Really?')
    })
    it('should not fail given a zero length paragraph', () => {
        expect(convert('')).to.equal('')
        expect(convert('.')).to.equal('')
        expect(convert('!')).to.equal('')
        expect(convert('?')).to.equal('')
    })
})
describe.skip('resolves edge cases', () => {
    it('should convert decimal numbers', () => {
        expect(convert('the quick brown fox sold for $1.25.')).to.equal
            ('The quick brown fox sold for $1.25.')
    })
    it('should convert initialisms', () => {
        expect(convert('the quick BROWN FOX is from the U.S.A.')).to.equal
            ('The quick brown fox is from the U.S.A.')
    })
})
