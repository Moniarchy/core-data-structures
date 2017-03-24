'use strict'

class Node {
  constructor( data ) {
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
    if ( this.size === 0 ) {
      this.top = new Node( element )
      this.size++
    } else if ( this.size > 0 ) {
      var newNode = new Node( element )
      newNode.next = this.top
      this.top = newNode
      this.size++
  }
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
