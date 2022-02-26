import { stories, } from './content.js';
import { to, } from './modules/conversions.mjs';



var responses = {};
var prompt_index = 0;
var story = null;

const showFinal = function () {
    $('.prompt').hide();
    var str = story.text_fn(responses);
    str += '<br/>'

    $('.title').toggleClass('title-story');
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
        $('.hint').html(w.hint);
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
