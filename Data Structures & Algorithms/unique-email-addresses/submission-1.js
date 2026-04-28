class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        let unique = new Set()
        for (let e of emails) {
            let [local, domain] = e.split('@')
            local = local.split('+')[0]
            local = local.replace(/\./g, '')
            unique.add(`${local}@${domain}`)
        }
        return unique.size
    }
}
