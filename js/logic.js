import { to, } from './modules/conversions.mjs';

const Word = function(kind, name, convert) {
    return {
        kind: kind,
        name: name,
        convert: convert,
    };
}

const Story = function(title, words, text_fn) {
    return {
        title: title,
        words: words,
        text_fn: text_fn,
    };
}

const stories = [
    Story("Appearance", [
        Word('specific person', 'someone', to.none),
        Word('another specific person', 'another', to.none),
        Word('job plural', 'police', to.none),
        Word('past tense action on something', 'arrested', to.none),
    ],
        t => `
There once was ${t.someone} and the ${t.someone} was being mean to ${t.another}.
Then the ${t.police} came. And they ${t.arrested} both ${t.someone} and ${t.another}.
`),


    Story("On the Sea", [
        Word('large object',                        'big_thing', to.none),
        Word('verb ending with "ing"',              'shining',   to.none),
        Word('amount of effort (best, worst, ...)', 'best',      to.none),
        Word('thing',                               'billows',   to.none),
        Word('adjective',                           'smooth',    to.none),
        Word('another adjective',                   'bright',    to.none),
        Word('last adjective',                      'odd',       to.none),
        Word('position (start, middle, end, ...)',  'middle',    to.none),
    ],
        t => `
The ${t.big_thing} was ${t.shining} on the sea,
${title_case(t.shining)} with all his might:
He did his very ${t.best} to make
The ${t.billows} ${t.smooth} and ${t.bright}--
And this was ${t.odd}, because it was
The ${t.middle} of the night.
`),

    Story("Extremes", [
        Word('noun',                          'wet_thing',   to.none),
        Word('plural noun',                   'dry_thing',   to.none),
        Word('verb',                          'to_cloud',    to.none),
        Word('generic place (beach)',         'where_cloud', to.none),
        Word('plural animal',                 'flyers',      to.none),
        Word('relative place (above, below)', 'where_flyer', to.none),
    ],
        t => `
The ${t.wet_thing} was wet as wet could be,
The ${t.dry_thing} were dry as dry.
You could not ${t.to_cloud} a cloud, because
No cloud was in the ${t.where_cloud}:
No ${t.flyers} were flying ${t.where_flyer}--
There were no ${t.flyers} to fly.
`),


    Story("The Lamenters", [
        Word('animal', 'Walrus', to.none),
        Word('job', 'Carpenter', to.none),
        Word('movement verb (ending with "ing")', 'walking', to.none),
        Word('emotional past-tense verb (burbled, grinned)', 'wept', to.none),
        Word('plural or unquantified noun', 'sand', to.none),
        Word('past tense verb', 'cleared', to.none),
        Word('adjective', 'grand', to.none),
        Word('count (whole number)', 'seven', to.none),
        Word('plural job', 'maids', to.none),
        Word('number', 'sevenagain', to.none),
        Word('plural tool', 'mops', to.none),
        Word('time measurement', 'year', to.none),
        Word('adjective', 'clear', to.none),
        Word('noun that touches the body', 'tear', to.none),
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
    responses[w.name] = to.none(val);
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
        $('.requirement').html("Input "+ to.a_an(w.kind));
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
    $('.title').html(story.title);
    nextPrompt();
}

export { runMadlibs, }
