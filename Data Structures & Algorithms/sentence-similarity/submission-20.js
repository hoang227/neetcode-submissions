class Solution {
    /**
     * @param {string[]} sentence1
     * @param {string[]} sentence2
     * @param {string[][]} similarPairs
     * @return {boolean}
     */

    areSentencesSimilar(sentence1, sentence2, similarPairs) {
        if (sentence1.length !== sentence2.length) return false
        
        const pairs = new Map()
        const addPair = (a, b) => {
            if (!pairs.has(a)) pairs.set(a, new Set())
            pairs.get(a).add(b)
        }

        for (let [a,b] of similarPairs) {
            addPair(a, b)
            addPair(b, a)
        }

        for (let i in sentence1) {
            const w1 = sentence1[i], w2 = sentence2[i]
            if (w1 !== w2 && !pairs.get(w1)?.has(w2)) return false
        }
        return true
    }
}
