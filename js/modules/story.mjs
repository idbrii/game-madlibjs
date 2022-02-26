
export const Word = function(kind, name) {
    return {
        kind: kind,
        name: name,
    };
}

export const Story = function(title, words, text_fn) {
    return {
        title: title,
        words: words,
        text_fn: text_fn,
    };
}

