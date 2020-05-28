# 211. Add and Search Word - Data structure design

## Topic

Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

Example:

```
addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
```
Note:

You may assume that all words are consist of lowercase letters a-z.

## Solution

related topic: trie（字典树）

```js
/**
 * Initialize your data structure here.
 */

const R = 26;

function TriaNode() {
  this.isEnd = false;
  this.next = new Array(R);
}

var WordDictionary = function() {
  this.root = new TriaNode();
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    this.root = this.insertWord2Tria(word, this.root, 0);
};

WordDictionary.prototype.insertWord2Tria = function(word, node, index) {
  if (!node) {
    node = new TriaNode();
  }
  if (index === word.length) {
    node.isEnd = true;
    return node;
  }
  const l = word.charCodeAt(index);
  // node 所处的 index 就表示了其字母是什么。这里的 .next 其实用 map 会更直观些，但是性能不如使用 Array
  node.next[l - 97] = this.insertWord2Tria(word, node.next[l - 97], index + 1)
  return node;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  return this.searchWord(word, this.root, 0)
};

WordDictionary.prototype.searchWord = function(word, node, index) {
  if (!node) {
    return false;
  }
  if (index === word.length) {
    return node.isEnd;
  }
  const l = word.charCodeAt(index);
  const l0 = word.charAt(index);
  let result = false;
  for (let c = 0; c < R; c++) {
    if (l0 === '.' || c === l - 97) {
      result = result || this.searchWord(word, node.next[c], index + 1);
    }
  }
  return result;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

```