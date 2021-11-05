/// <reference types= "cypress" />

it('A external test...', () => {

})

describe.skip('Should group tests...', () => {
    describe('Should group more specific tests...', () => {
        it('A specific tests...',() => {

        })
    })

    describe('Should group more specific teste 2...',() => {
        it('A internal test 2...', () => {

        })
    })

    it.skip('A internal test...', () => {

    })
})