// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {/*
  constructor () {
    this.head = null;
    this.size = 0;
  } */
  get size() {
    throw new Error('Not implemented');
    /*
    return this.size; */
  }

  enqueue(/* element */) {
    throw new Error('Not implemented');
  }
  /*
    const node = new ListNode(element);

    if (!this.head) {
      this.head = node;
    } else {
      let item = this.head;
      while (item.next) {
        item = item.next;
      }
      item.next = node;
    }
    this.size += 1;
    return node;
  }

    let item = new Item(element);

    let currentItem;

    if (this.head == null){
      this.head = node;
    } else {
        currentItem = this.head;
        while (currentItem.next) {
        currentItem = currentItem.next;
    } currentItem.next = item;
  } this.size++; */

  dequeue() {
    throw new Error('Not implemented');
    /*
    const temp = this.head;
    this.head = this.head.next;
    this.size -= -1;
    return temp;
  } */
  }
}
module.exports = Queue;
