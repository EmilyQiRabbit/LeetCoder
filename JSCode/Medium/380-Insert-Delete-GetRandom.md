# 380. Insert Delete GetRandom O(1)

## Topic


Implement the RandomizedSet class:

* `bool insert(int val)` Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
* `bool remove(int val)` Removes an item val from the set if present. Returns true if the item was present, false otherwise.
* `int getRandom()` Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.

Follow up: Could you implement the functions of the class with each function works in average O(1) time?

## Solution

```js
// Set 解法
class RandomizedSet {
    constructor() {
        this.S = new Set();
    }
    insert(x, S = this.S) {
        if (S.has(x))
            return false;
        S.add(x);
        return true;
    }
    remove(x, S = this.S) {
        if (!S.has(x))
            return false;
        S.delete(x);
        return true;
    }
    getRandom(S = this.S) {
        return [...S][Math.floor(Math.random() * S.size)];
    }
}
```

```js
// Map 解法
class RandomizedSet {
    constructor() {
        this.A = [];
        this.m = new Map();
    }
    insert(x, A = this.A, m = this.m) {
        if (m.has(x))
            return false;
        A.push(x);
        m.set(x, A.length - 1);
        return true;
    }
    remove(x, A = this.A, m = this.m) {
        if (!m.has(x))
            return false;
        let i = m.get(x); // value x exists at A[i]
        m.delete(x); // erase mapping to removed value x
        [A[i], A[A.length - 1]] = [A[A.length -1], A[i]], A.pop(); // erase A[i] in O(1) via swap/pop back
        m.set(A[i], i); // update mapped index for the element which replaced A[i]
        return true;
    }
    getRandom(A = this.A) {
        return A[Math.floor(Math.random() * A.length)];
    }
}

```
