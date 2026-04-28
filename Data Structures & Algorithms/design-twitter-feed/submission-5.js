class Twitter {
    constructor() {
        this.timeStamp = 1
        this.users = new Map()
        this.follows = new Map()
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.users.has(userId)) this.users.set(userId, [[tweetId, this.timeStamp]])
        else this.users.get(userId).push([tweetId, this.timeStamp])

        this.timeStamp++

        if (!this.follows.has(userId)) this.follows.set(userId, new Set([userId]))
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const minPQ = new PriorityQueue((a,b) => a[1] - b[1])

        for (let f of this.follows.get(userId)) {
            for (let p of this.users.get(f)) {
                minPQ.push(p)
                if (minPQ.size() > 10) minPQ.pop()
            }
        }

        return minPQ.toArray().map(n => n[0]).reverse()
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.follows.has(followerId)) this.follows.set(followerId, new Set([followeeId]))
        else this.follows.get(followerId).add(followeeId)
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (followerId === followeeId) return
        if (this.follows.has(followerId)) this.follows.get(followerId).delete(followeeId)
    }
}
