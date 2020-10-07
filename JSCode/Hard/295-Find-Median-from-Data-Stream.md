# 295. Find Median from Data Stream

## Topic

Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

For example,

`[2,3,4]`, the median is `3`

`[2,3]`, the median is `(2 + 3) / 2 = 2.5`

Design a data structure that supports the following two operations:

* void addNum(int num) - Add a integer number from the data stream to the data structure.
* double findMedian() - Return the median of all elements so far.
 

Example:

```
addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
```

Follow up:

If all integer numbers from the stream are between 0 and 100, how would you optimize it?

If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?

## Solution

### Implementing PriorityQueue in JavaScript

```js
class PriorityQueue {
    top = 0;
    parent = i => ((i + 1) >>> 1) - 1;
    left = i => (i << 1) + 1;
    right = i => (i + 1) << 1;

    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }

    size() {
        return this._heap.length;
    }

    isEmpty() {
        return this.size() == 0;
    }

    peek() {
        return this._heap[this.top];
    }

    push(...values) {
        values.forEach(value => {
            this._heap.push(value);
            this._siftUp();
        });
        return this.size();
    }

    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > this.top) {
            this._swap(this.top, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }

    replace(value) {
        const replacedValue = this.peek();
        this._heap[this.top] = value;
        this._siftDown();
        return replacedValue;
    }

    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }

    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }

    _siftUp() {
        let node = this.size() - 1;
        while (node > this.top && this._greater(node, this.parent(node))) {
        this._swap(node, this.parent(node));
        node = this.parent(node);
        }
    }

    _siftDown() {
        let node = this.top;
        while (
            (this.left(node) < this.size() && this._greater(this.left(node), node)) ||
            (this.right(node) < this.size() && this._greater(this.right(node), node))
        ) {
            let maxChild = 
                (this.right(node) < this.size() && this._greater(this.right(node), this.left(node))) ?
                this.right(node) : this.left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
}
```

### Solution of Topic

```js
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.larger = new PriorityQueue();
    this.smaller = new PriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.larger.push(num);
    this.smaller.push(-this.larger.pop());
    if (this.larger.size() < this.smaller.size()) {
        this.larger.push(-this.smaller.pop());
    }
    
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    return this.larger.size() > this.smaller.size()
               ? this.larger.peek()
               : (this.larger.peek() - this.smaller.peek()) / 2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

```
