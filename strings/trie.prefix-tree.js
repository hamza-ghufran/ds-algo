//  Problem: [Leet Code 208] https://leetcode.com/problems/implement-trie-prefix-tree/

class Trie {

  constructor() {
    this.store = {}
    this.isEndOfWord = false
  }

  insert(word, i = 0) {
    if (!word.length || i > word.length) return

    const currentLetter = word[i]

    if (!this.store[currentLetter]) {
      // if letter not there
      // init as a new trie
      this.store[currentLetter] = new Trie()
    }

    if (i === word.length - 1) {
      // if apple 
      // if e
      // then mark it as end of the word being inserted
      this.store[currentLetter].isEndOfWord = true
      return
    }

    i++
    this.store[currentLetter].insert(word, i)
  }

  search(word, i = 0) {
    if (i > word.length) return false

    const currentLetter = word[i]
    const doesTreeHasCurrentLetterInIt = this.store[currentLetter]

    if (!doesTreeHasCurrentLetterInIt) {
      return false
    }

    if (i === word.length - 1) {
      return this.store[currentLetter].isEndOfWord
    }

    i++
    return this.store[currentLetter].search(word, i)
  }

  startsWith(word, i = 0) {
    if (i > word.length) return
    const currentLetter = word[i]
    const doesTreeHaveCurrentLetter = this.store[currentLetter]

    if (doesTreeHaveCurrentLetter) {
      // and if it is the lastLetter
      if (i === word.length - 1) return true

      i++
      return this.store[currentLetter].startsWith(word, i)
    } else return false
  }
}

const prefixTree = new Trie()

prefixTree.insert('apple')
prefixTree.insert('apps')

console.log(prefixTree.search('apps'))

// console.log(prefixTree.startsWith(''))

// console.log(JSON.stringify(prefixTree, '', 2))
