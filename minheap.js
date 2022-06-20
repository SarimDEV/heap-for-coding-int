class Heap {
  constructor() {
    this.heap = []
  }

  // o(n)
  bubbleUp(i) {
    let parent = ~~((i-1) / 2)

    while (i !== 0 && this.heap[i][0] < this.heap[parent][0]) {
      const temp = this.heap[i]
      this.heap[i] = this.heap[parent]
      this.heap[parent] = temp

      i = parent
      parent = ~~((i-1) / 2)
    }
  }

  // o(n)
  bubbleDown(i) {
    let left = 2*i + 1
    let right = 2*i + 2

    while((left < this.heap.length && this.heap[i][0] > this.heap[left][0]) 
      || (right < this.heap.length && this.heap[i][0] > this.heap[right][0])) {
      const smaller = right >= this.heap.length || this.heap[left][0] < this.heap[right][0] ? left : right

      const temp = this.heap[i]
      this.heap[i] = this.heap[smaller]
      this.heap[smaller] = temp

      i = smaller
      left = 2*i + 1
      right = 2*i + 2
    }
  }

  // log (n)
  insert(val, toInsert) {
    this.heap.push([val, toInsert])
    this.bubbleUp(this.heap.length - 1)
  }

  pop() {
    const val = this.heap[0]
    // swap with leaf

    this.heap[0] = this.heap[this.heap.length - 1]
    this.heap[this.heap.length - 1] = val
    this.heap.pop()
    this.bubbleDown(0)

    return val[1]
  }
}
