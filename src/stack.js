'use strict'

export default class Stack {
  constructor() {
    this.node = { data: '', next: ''}
    this.top = null
    //a node is an object
    //it has data and a pointer to the next node
    //if it is the head it has that info as well
    //if it is the tail it does not have a pointer to the next node
  }

  push( ) {
    //update this.top
  }

  pop() {
    //return this.top
    //then update this.top
  }

  peek() {

  }

  length() {

  }

  isEmpty() {
    return this.top === null
  }
}
