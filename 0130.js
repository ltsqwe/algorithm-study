var solution = (n, words) => {
    let grave = new Set();
    while(words.length > 0) {
        let i = 0;
        for(i = 0 ; i < n ; i++) {
            let word = words.pop();
            if(grave.has(word)) return [i + 1, word];
            grave.add(word);
        }
    }

    return [0, 0];
}
