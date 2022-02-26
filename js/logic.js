import { indefiniteArticle, } from './modules/indefinite-article.mjs';

const Word = function(kind, name, convert) {
    return {
        kind: kind,
        name: name,
        convert: convert,
    };
}
const none = function(str) { return str; }

const a_an = function(str) {
    if (str.startsWith("another")) {
        return str;
    }
    if (str.startsWith("last")) {
        return "one "+ str;
    }
    const article = indefiniteArticle(str);
    return `${article} ${str}`;
}

const title_case = function(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

const Story = function(words, text_fn) {
    return {
        words: words,
        text_fn: text_fn,
    };
}

const stories = [
    Story([
        Word('large object',                        'big_thing', none),
        Word('verb ending with "ing"',              'shining',   none),
        Word('amount of effort (best, worst, ...)', 'best',      none),
        Word('thing',                               'billows',   none),
        Word('adjective',                           'smooth',    none),
        Word('another adjective',                   'bright',    none),
        Word('last adjective',                      'odd',       none),
        Word('position (start, middle, end, ...)',  'middle',    none),
    ],
        t => `
The ${t.big_thing} was ${t.shining} on the sea,
${title_case(t.shining)} with all his might:
He did his very ${t.best} to make
The ${t.billows} ${t.smooth} and ${t.bright}--
And this was ${t.odd}, because it was
The ${t.middle} of the night.
`),

    Story([
        Word('noun',                          'wet_thing',   none),
        Word('plural noun',                   'dry_thing',   none),
        Word('verb',                          'to_cloud',    none),
        Word('generic place (beach)',         'where_cloud', none),
        Word('plural animal',                 'flyers',      none),
        Word('relative place (above, below)', 'where_flyer', none),
    ],
        t => `
The ${t.wet_thing} was wet as wet could be,
The ${t.dry_thing} were dry as dry.
You could not ${t.to_cloud} a cloud, because
No cloud was in the ${t.where_cloud}:
No ${t.flyers} were flying ${t.where_flyer}--
There were no ${t.flyers} to fly.
`),


    Story([
        Word('animal', 'Walrus', none),
        Word('job', 'Carpenter', none),
        Word('movement verb (ending with "ing")', 'walking', none),
        Word('emotional past-tense verb (burbled, grinned)', 'wept', none),
        Word('plural or unquantified noun', 'sand', none),
        Word('past tense verb', 'cleared', none),
        Word('adjective', 'grand', none),
        Word('count (whole number)', 'seven', none),
        Word('plural job', 'maids', none),
        Word('number', 'sevenagain', none),
        Word('plural tool', 'mops', none),
        Word('time measurement', 'year', none),
        Word('adjective', 'clear', none),
        Word('noun that touches the body', 'tear', none),
    ],
        t => `
The ${t.Walrus} and the ${t.Carpenter}
Were ${t.walking} close at hand;
They ${t.wept} like anything to see
Such quantities of ${t.sand}:
"If this were only ${t.cleared} away,"
They said, "it would be ${t.grand}!"
"If ${t.seven} ${t.maids} with ${t.sevenagain} ${t.mops}
Swept it for half a ${t.year}.
Do you suppose," the ${t.Walrus} said,
"That they could get it ${t.clear}?"
"I doubt it," said the ${t.Carpenter},
And shed a bitter ${t.tear}.
`),

];

// Ideas for how to make a good madlib.
// * silly words
// * insult a kid says
// * specific body part
// * specific length of time that will be funny when inappropriate
// * common phrases perverted by a substituted word



var responses = {};
var prompt_index = 0;
var story = null;

const showFinal = function () {
    $('.prompt').hide();
    var str = story.text_fn(responses);
    str += '<br/>'

    $('.story').html(str);
    $('.story').show();
}

const storeResponse = function() {
    const w = story.words[prompt_index];
    const val = $('input').val();
    responses[w.name] = w.convert(val);
    const has_content = val.length > 0
    if (has_content) {
        $('input').val('');
    }
    return has_content;
}

const nextPrompt = function() {
    prompt_index += 1;
    if (prompt_index < story.words.length) {
        const w = story.words[prompt_index];
        $('.requirement').html("Provide "+ a_an(w.kind));
    }
    else {
        showFinal();
    }
}

const randomChoice = function(list) {
    return list[Math.floor(Math.random() * list.length)];
}


const runMadlibs = function() {

    $('input')[0].addEventListener("keyup", function(event) {
        const enter_scan_code = 13;
        if (event.keyCode === enter_scan_code) {
            // Cancel the default action
            event.preventDefault();
            $('button')[0].click();
        }
    });

    $('button').click(function() {
        if (storeResponse()) {
            nextPrompt();
        }
    });
    $('.story').hide();

    story = randomChoice(stories);

    // Immediately show first prompt
    prompt_index = -1;
    nextPrompt();
}

export { runMadlibs, }
