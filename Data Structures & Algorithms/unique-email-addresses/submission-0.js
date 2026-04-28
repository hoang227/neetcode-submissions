class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        let seen = new Set()
        for (let e of emails) {
            let unique = e.split('@')
            unique = unique[0].split('+')[0].split('.').join('') + unique[1]
            seen.add(unique)
        }
        return seen.size
    }
}
