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

to.title_case = function(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export { to, }
