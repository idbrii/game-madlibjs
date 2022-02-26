
export const Word = function(kind, hint, name) {
    console.assert(kind);
    console.assert(hint);
    console.assert(name);
    return {
        kind: kind,
        hint: hint,
        name: name,
    };
}

const countWordOccurences = function(list) {
    return list.reduce((acc, w) => {
        const curr = w.name;
        acc[curr] ??= 0;
        ++acc[curr];
        return acc;
    }, {});
}

export const Story = function(title, words, text_fn) {
    console.assert(title);
    console.assert(words);
    console.assert(text_fn);
    const counts = countWordOccurences(words);
    for (let k in counts) {
        const count = counts[k];
        if (count > 1) {
            console.assert(false, `Word '${k}' was used ${count} times.`);
        }
    }
    return {
        title: title,
        words: words,
        text_fn: text_fn,
    };
}

