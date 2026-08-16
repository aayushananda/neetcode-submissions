class MyHashSet {
    constructor() {
        this.data = {}
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.data[key] = true
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this.data[key]
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.data[key] ? true : false
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
