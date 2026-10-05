function fetchData(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Data for ID ${id}`), 1000);
    });
}

// Sequential operation
async function fetchSequential() {
    console.time("sequential");
    const data1 = await fetchData(2);
    const data2 = await fetchData(4);
    const data3 = await fetchData(6);
    console.timeEnd("sequential");
    return [data1, data2, data3];
}

// Parallel operation
async function fetchParallel() {
    console.time("parallel");
    const results = await Promise.all([
        fetchData(2),
        fetchData(4),
        fetchData(6)
    ]);
    console.timeEnd("parallel");
    return results;
}

async function run() {
    console.log("Running sequentially...");
    const sequentialResults = await fetchSequential();
    console.log(sequentialResults);

    console.log(("\nRunning parallel..."));
    const parallelResults = await fetchParallel();
    console.log(parallelResults);
}

run();