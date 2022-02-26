
export const Word = function(kind, hint, name) {
    return {
        kind: kind,
        hint: hint,
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

