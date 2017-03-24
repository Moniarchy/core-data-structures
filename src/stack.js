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
    if ( this.size === 0 ) {
      console.log( "This stack is already empty and cannot be emptied further." )
    } else if ( this.size > 0 ) {
      var nodeToBePopped = this.top.data
      this.top = this.top.next
      this.size--
      return nodeToBePopped
    }
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
