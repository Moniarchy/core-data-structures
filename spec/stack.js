import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use( chaiChange )


describe( 'Stack', () => {
  'use strict'
  it( 'exists', () => {
    expect( Stack ).to.be.a( 'function' )
  })

  context( 'push()', () => {
    const pringles = new Stack()

    it.only( 'pushes an element to the top of the stack.', () => {
      expect(() => pringles.push( 'foo' ))
        .to.include( 'foo' )
    })
    it.only( 'increases the length of the stack by 1.', () => {
      expect(() => pringles.push( 'foo' ))
        .to.alter(() => pringles.length(), { from: 0, to: 1 })
    })
  })

  context( 'pop()', () => {
    const pringles = new Stack()
    pringles.push( 'foo' )
    pringles.push( 'bar' )
    console.log( pringles.top.next )

    it( 'decreases the length of the stack by 1.', () => {
      expect(() => pringles.pop())
        .to.alter(() => pringles.length(), { from: 2, to: 1 })
    })
    it( 'returns the element that was popped', () => {
      expect(() => pringles.pop())
        .to.equal( 'bar' )
    })
  })

  context( 'peek()', () => {
    const pringles = new Stack()
    pringles.push( 'foo' )
    pringles.push( 'bar' )

    it( 'returns the last pushed element.', () => {
      expect( pringles.peek()).to.equal( 'bar' )
    })
  })

  context( 'length()', () => {
    const pringles = new Stack()
    pringles.push( 'foo' )
    pringles.push( 'bar' )

    it( 'returns the length of the stack.', () => {
      expect( pringles.length()).to.equal( 2 )
    })
  })

  context( 'isEmpty()', () => {
    const pringles = new Stack()

    it( 'returns true only if the stack is empty.', () => {
      expect( pringles.isEmpty()).to.be.true
    })
  })
})
