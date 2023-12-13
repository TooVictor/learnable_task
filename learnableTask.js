function nth_most_rare(list, n) {
    const frequencyMap = new Map();
    list.forEach(item => {
        frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
    });

    const sortedItems = Array.from(frequencyMap.entries()).sort((a, b) => {
        const frequencyCompare = a[1] - b[1];
        if (frequencyCompare === 0) {
            return a[0] - b[0]; // If frequencies are equal, sort by value
        }
        return frequencyCompare;
    });

    if (n - 1 < sortedItems.length) {
        return sortedItems[n - 1][0];
    } else {
        throw new Error("n is larger than the number of unique items in the list");
    }
}


console.log(nth_most_rare([5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 1, 5], 2));