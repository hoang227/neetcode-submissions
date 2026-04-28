class Solution {
    /**
     * @param {string[]} sentence1
     * @param {string[]} sentence2
     * @param {string[][]} similarPairs
     * @return {boolean}
     */
    contains(list, word) {
        for (let w of list) {
            if (w === word) return true
        }
        return false
    }

    areSentencesSimilar(sentence1, sentence2, similarPairs) {
        if (sentence1.length !== sentence2.length) return false
        
        const pairs = new Map()
        for (let pair of similarPairs) {
            pairs.has(pair[0]) ? pairs.get(pair[0]).push(pair[1]) : pairs.set(pair[0], [pair[1]])
            pairs.has(pair[1]) ? pairs.get(pair[1]).push(pair[0]) : pairs.set(pair[1], [pair[0]])
        }

        for (let i in sentence1) {
            if (sentence1[i] === sentence2[i]) continue

            if (pairs.get(sentence1[i])) {
                if (!this.contains(pairs.get(sentence1[i]),sentence2[i])) return false
            } else {
                if (sentence1[i] !== sentence2[i]) return false
            }
        }
        return true
    }
}
