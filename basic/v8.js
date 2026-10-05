const v8 = require('v8');
const heap = v8.getHeapStatistics();

console.log("Heap size limit:", (heap.heap_size_limit / 1024 / 1024).toFixed(2), "MB");
console.log("Total heap size:", (heap.total_heap_size / 1024 / 1024).toFixed(2), "MB");
console.log("Used heap size", (heap.used_heap_size / 1024 /1024).toFixed(2), "MB");