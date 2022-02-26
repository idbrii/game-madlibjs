import { indefiniteArticle, } from './indefinite-article.mjs';

const to = {}

to.none = function(str) { return str; }

to.a_an = function(str) {
    if (str.startsWith("another")) {
        return str;
    }
    if (str.startsWith("last")) {
        return "one "+ str;
    }
    const article = indefiniteArticle(str);
    return `${article} ${str}`;
}

const count_upper = function(str) {
    return str.length - str.replace(/[A-Z]/g, '').length;  
}

// Only makes lower if only the first letter was lower (so The Queen retains upper).
to.initial_lower = function(str) {
    if (count_upper(str) > 1) {
        return str;
    }
    return str.toLowerCase();
}

to.initial_upper = function(str) {
    if (str.length < 2) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}

to.title_case = function(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export { to, }
