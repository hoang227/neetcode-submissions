class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let minPQ = new PriorityQueue((a,b) => b[2] - a[2])

        for (let [x,y] of points) {
            minPQ.push([x,y,(x**2)+(y**2)])
            if (minPQ.size() > k) minPQ.pop()
        }

        return Array.from(minPQ).map(x => [x[0],x[1]])
    }
}
