'use strict'

class Node {
  constructor( data, next ) {
    this.data = data
    this.next = null
  }
}

export default class Stack {
  constructor() {
    this.top = null
    this.size = 0
  }

  push( element ) {
    this.top = new Node( element, Node )
    //update this.top
    //increment this.size
  }

  pop() {
    //return this.top
    //then update this.top
    //decrement this.size
  }

  peek() {
    return this.top
  }

  length() {
    return this.size
  }

  isEmpty() {
    return this.top === null
  }
}
