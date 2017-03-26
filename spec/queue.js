import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use( chaiChange )

describe( 'Queue', () => {
  'use strict'

  it( 'exists', () => {
    expect( Queue ).to.be.a('function')
  })

  context( 'enqueue()', () => {
    it( 'adds an element to the back of the queue.', () => {
      const longLine = new Queue()

      expect( longLine.enqueue( 'foo' ))
        .to.alter( longLine.length(), { from: 0, to: 1 })
    })
  })

  context( 'dequeue()', () => {
    const longLine = new Queue()
    longLine.enqueue( 'foo' )
    longLine.enqueue( 'bar' )

    it( 'removes the front element in the queue.', () => {
      expect( longLine.dequeue()).to.alter( longLine.length(), { from: 2, to: 1 })
    })
    it( 'returns the front element in the queue.', () => {
      expect( longLine.dequeue()).to.equal( 'bar' )
    })
    it( 'returns null if the queue is empty.', () => {
      expect( longLine.dequeue()).to.be.null
    })
  })

  context( 'front()', () => {
    const longLine = new Queue()
    longLine.enqueue( 'foo' )
    longLine.enqueue( 'bar' )

    it( 'returns the front element in the queue.', () => {
      expect( longLine.front()).to.equal( 'foo' ))
    })
    it( 'returns null if the queue is empty.', () => {
      longline.dequeue()
      longline.dequeue()

      expect( longLine.front()).to.be.null
    })
  })

  context( 'back()', () => {
    it( 'returns the last element in the queue.', () => {
      const longLine = new Queue()
      longLine.enqueue( 'foo' )

      expect( longLine.back()).to.equal( 'foo' )
    })
    it( 'returns null if the queue is empty.', () => {
      longLine.dequeue()

      expect( longLine.back()).to.be.null
    })
  })

  context( 'isEmpty()', () => {
    it( 'returns true if the queue is empty.', () => {
      const longLine = new Queue()

      expect( longLine.isEmpty()).to.be.true
    })
  })

  context( 'length()', () => {
    it( 'returns the length of the queue.', () => {
      const longLine = new Queue()
      longLine.enqueue( 'foo' )
      longLine.dequeue( 'bar' )

      expect( longLine.length()).to.equal( 2 )
    })
  })
})
