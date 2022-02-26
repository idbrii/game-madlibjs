import { Word, Story, } from './modules/story.mjs';
import { to, } from './modules/conversions.mjs';

// Ideas for how to make a good madlib.
// * silly words
// * insult a kid says
// * specific body part
// * specific length of time that will be funny when inappropriate
// * common phrases perverted by a substituted word

const generic_adjective = 'a word describing something (green)';
const generic_job = 'an occupation like janitor, programmer, scientist'
const generic_noun = 'a person, place, or thing';
const generic_nouns = 'more than one thing (bats, beds, broomsticks)';
const generic_number = 'a number like one or ten or one million';
const generic_theperson = 'a named person (Batman, Santa)';
const generic_verb = 'an action';
const generic_verbed = 'an action that occurred in the past, probably ending with "ed"';

const stories = [

    Story("Appearance", [
        Word('specific person',                generic_theperson, 'someone'),
        Word('another specific person',        generic_theperson, 'another'),
        Word('job plural',                     generic_job,       'police'),
        Word('past tense action on something', generic_verbed,    'arrested'),
    ],
        t => `
There once was ${t.someone} and the ${t.someone} was being mean to ${t.another}.
Then the ${t.police} came. And they ${t.arrested} both ${t.someone} and ${t.another}.
`),


    Story("On the Sea", [
        Word('large object',           'the biggest thing you can think of', 'big_thing'),
        Word('verb ending with "ing"', 'running, crying, melting',           'shining'),
        Word('amount of effort',       'best, worst, ...',                   'best'),
        Word('thing',                  'a noun',                             'billows'),
        Word('adjective',              generic_adjective,                    'smooth'),
        Word('another adjective',      generic_adjective,                    'bright'),
        Word('last adjective',         generic_adjective,                    'odd'),
        Word('position',               'start, middle, end, ...',            'middle'),
    ],
        t => `
The ${t.big_thing} was ${t.shining} on the sea,
${to.title_case(t.shining)} with all his might:
He did his very ${t.best} to make
The ${t.billows} ${t.smooth} and ${t.bright}--
And this was ${t.odd}, because it was
The ${t.middle} of the night.
`),

    Story("Extremes", [
        Word('noun',           generic_noun,                                       'wet_thing'),
        Word('plural noun',    generic_nouns,                                      'dry_thing'),
        Word('verb',           generic_verb,                                       'to_cloud'),
        Word('generic place',  'a name for a kind of place (beach)',               'where_cloud'),
        Word('plural animal',  'an animal, but more than one (birds, bats, ants)', 'flyers'),
        Word('relative place', 'above, below',                                     'where_flyer'),
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
        Word('animal',                          'a kind of animal',                                        'walrus'),
        Word('job',                             generic_job,                                               'carpenter'),
        Word('movement verb ending with "ing"', 'walking, jumping, leaping',                               'walking'),
        Word('emotional past-tense verb',       'burbled, grinned',                                        'wept'),
        Word('plural or unquantified noun',     'generic_nouns',                                           'sand'),
        Word('past tense verb',                 generic_verbed,                                            'cleared'),
        Word('adjective',                       generic_adjective,                                         'grand'),
        Word('count',                           'whole number',                                            'seven'),
        Word('plural job',                      'an occupation like janitors, programmers, scientists',    'maids'),
        Word('number',                          generic_number,                                            'sevenagain'),
        Word('plural tool',                     'a thing you use to do something',                         'mops'),
        Word('measurement of time',             'a word to describe a period of time (year, millisecond)', 'year'),
        Word('adjective',                       generic_adjective,                                         'clear'),
        Word('noun that touches the body',      generic_noun,                                              'tear'),
    ],
        t => `
The ${to.title_case(t.walrus)} and the ${to.title_case(t.carpenter)}
Were ${t.walking} close at hand;
They ${t.wept} like anything to see
Such quantities of ${t.sand}:
"If this were only ${t.cleared} away,"
They said, "it would be ${t.grand}!"
"If ${t.seven} ${t.maids} with ${t.sevenagain} ${t.mops}
Swept it for half a ${t.year}.
Do you suppose," the ${to.title_case(t.walrus)} said,
"That they could get it ${t.clear}?"
"I doubt it," said the ${to.title_case(t.carpenter)},
And shed a bitter ${t.tear}.
`),

];

export { stories }
