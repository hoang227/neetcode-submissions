class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        return details.filter(d => parseInt(d.slice(-4,-2)) > 60).length
    }
}
