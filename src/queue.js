'use strict'

class Node( data ) {
  this.data = data
  this.next = null
}

export default class Queue {
  constructor() {
    this.top = null
    this.size = 0
  }

  enqueue( data ) {
    if ( this.size === 0 ) {
      new Node
      this.size++
    } else if ( this.size > 0 ) {
      var oldLastThing = 
    }
//create a Node
//if empty, the node is the new top. increment size by 1
//if not empty, update the next pointer for the new node. it is the old top
//then set the new node to the top
//then increment

}

  dequeue() {

}

  front() {

}

  back() {

}

  isEmpty() {

}

  length() {

}

}

queue.enqueue("foo") // adds an element (the string "foo") to the back of the queue.
queue.dequeue()      // returns and removes the front element in the queue or null if the queue is empty.
queue.front()        // returns the front element in queue or null if the queue is empty.
queue.back()         // returns the back element in the queue or null if the queue is empty.
queue.isEmpty()      // returns true if the queue is empty or false if not.
queue.length()
