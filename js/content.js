import { Word, Story, } from './modules/story.mjs';
import { to, } from './modules/conversions.mjs';

// Ideas for how to make a good madlib.
// * silly words
// * insult a kid says
// * specific body part
// * specific length of time that will be funny when inappropriate
// * common phrases perverted by a substituted word

const generic_adjective = 'a word describing something (green)';
const generic_color = 'a color of any kind';
const generic_job = 'an occupation like janitor, programmer, scientist';
const generic_noun = 'a person, place, or thing';
const generic_nouns = 'more than one thing (bats, beds, broomsticks)';
const generic_number = 'a number like one or ten or one million';
const generic_person = 'an unnamed person (butler, woman in blue, tall man)';
const generic_superlative = 'a word describing something to the extreme (best, biggest, strongest)';
const generic_theperson = 'a named person (Batman, Santa)';
const generic_verb = 'an action in present tense';
const generic_verbed = 'an action that occurred in the past, probably ending with "ed"';

const stories = [

    Story("Sob Story", [
        Word('person',                          generic_person,                                       'someone'),
        Word('movement verb ending with "ing"', 'walking, jumping, leaping',                          'walking'),
        Word('past tense verb',                 generic_verbed,                                       'fell'),
        Word('body part',                       'some part of your body',                             'knee'),
        Word('nice place',                      'a place that makes you feel better',                 'hospital'),
        Word('past tense medical verb',         'something a doctor did to you',                      'surgery'),
        Word('sad past tense verb',             'a sad thing that happened to you (may end with -ed)', 'died'),
    ],
        t => `
${to.initial_upper(to.a_an(t.someone))} was ${t.walking} down the street.
He ${t.fell}. He broke his ${t.knee}.
He went to the ${t.hospital}.
He got ${t.surgery}, then he ${t.died}.
`),


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
        Word('taste adjective',                 'a word describing how something tastes',                  'bitter'),
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
And shed a ${t.bitter} tear.
`),

    Story("Lunch", [
        Word('plural animal',            'multiple of an animal (dogs, birds)',                       'oysters'),
        Word('adjective',                generic_adjective,                                           'boiling'),
        Word('food',                     'something to eat',                                          'bread'),
        Word('something you run out of', 'something you have but then have none',                     'breath'),
        Word('plural vegetable',         'some kind of vegatables (carrots)',                         'cabbages'),
        Word('job',                      generic_job,                                                 'carpenter'),
        Word('talking verb',             'an action for talking to someone else (shout, chat, talk)', 'chat'),
        Word('adjective',                generic_adjective,                                           'fat'),
        Word('eating verb',              'an action of how you consume food (drink, eat, gulp)',      'feed'),
        Word('adjective',                generic_adjective,                                           'good'),
        Word('plural noun',              generic_nouns,                                               'kings'),
        Word('plural noun',              generic_nouns,                                               'sealingwax'),
        Word('generic place',            'a name for a kind of place (beach)',                        'sea'),
        Word('plural noun',              generic_nouns,                                               'ships'),
        Word('another plural noun',      generic_nouns,                                               'shoes'),
        Word('talking verb',             'an action for talking to someone else (shout, chat, talk)', 'talk'),
        Word('condiment',                'something you put on food',                                 'vinegar'),
        Word('animal',                   'a kind of animal',                                          'walrus'),
        Word('plural noun',              generic_nouns,                                               'wings'),
        Word('condiment',                'something you put on food',                                 'pepper'),
        Word('color',                    generic_color,                                               'blue'),
        Word('noun',                     generic_noun,                                                'kindness'),
        Word('adjective',                generic_adjective,                                           'dismal'),
        Word('another adjective',        generic_adjective,                                           'fine'),
        Word('sounds a person makes',    'word for a kind of sound people make',                      'sobs'),
        Word('superlative adjective',    generic_superlative,                                         'largest'),
        Word('noun',                     generic_noun,                                                'handkerchief'),
        Word('adjective',                generic_adjective,                                           'streaming'),
        Word('another adjective',        generic_adjective,                                           'trotting'),
        Word('last adjective',           generic_adjective,                                           'odd'),
        Word('eating verb',              'an action of how you consume food (drink, eat, gulp)',      'eaten'),
    ],
        t => `
"The time has come," the ${to.title_case(t.walrus)} said,
"To ${t.talk} of many things:
Of ${t.shoes}--and ${t.ships}--and ${t.sealingwax}--
Of ${t.cabbages}--and ${t.kings}--
And why the ${t.sea} is ${t.boiling}--
And whether pigs have ${t.wings}."

"But wait a bit," the ${t.oysters} cried,
"Before we have our ${t.chat};
For some of us are out of ${t.breath},
And all of us are ${t.fat}!"
"No hurry!" said the ${to.title_case(t.carpenter)}.
They thanked him much for that.

"A loaf of ${t.bread}," the ${to.title_case(t.walrus)} said,
"Is what we chiefly need:
${to.initial_upper(t.pepper)} and ${t.vinegar} besides
Are very ${t.good} indeed--
Now if you're ready, ${to.title_case(t.oysters)} dear,
We can begin to ${t.feed}."

"But not on us!" the ${to.title_case(t.oysters)} cried,
Turning a little ${t.blue}.
"After such ${t.kindness}, that would be
A ${t.dismal} thing to do!"
"The night is ${t.fine}," the ${to.title_case(t.walrus)} said.
"Do you admire the view?

"I weep for you," the ${to.title_case(t.walrus)} said:
"I deeply sympathize."
With ${t.sobs} and tears he sorted out
Those of the ${t.largest} size,
Holding his ${t.handkerchief}
Before his ${t.streaming} eyes.

"O ${to.title_case(t.oysters)}," said the ${to.title_case(t.carpenter)},
"You've had a pleasant run!
Shall we be ${t.trotting} home again?'
But answer came there none--
And this was scarcely ${t.odd}, because
They'd ${t.eaten} every one.
`),


];

export { stories }
