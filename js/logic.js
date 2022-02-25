const Word = function(kind, name, convert) {
    return {
        kind: kind,
        name: name,
        convert: convert,
    };
}
const none = function(str) { return str; }
const title_case = function(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

var prompts = [
    Word('noun',           'wet_thing',   none),
    Word('plural noun',    'dry_thing',   none),
    Word('verb',           'to_cloud',    none),
    Word('place',          'where_cloud', none),
    Word('plural animal',  'flyers',      none),
    Word('relative place', 'where_flyer', none),
];

const text_fn = t => `
<br/> The ${t.wet_thing} was wet as wet could be,
<br/> The ${t.dry_thing} were dry as dry.
<br/> You could not ${t.to_cloud} a cloud, because
<br/> No cloud was in the ${t.where_cloud}:
<br/> No ${t.flyers} were flying ${t.where_flyer}--
<br/> There were no ${t.flyers} to fly.
<br/>
<br/>
`;




var responses = {};
var prompt_index = 0;

const showFinal = function () {
    $('.prompt').hide();
    const str = text_fn(responses);
    $('.story').html(str);
    $('.story').show();
}

const storeResponse = function() {
    const w = prompts[prompt_index];
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
    if (prompt_index < prompts.length) {
        const w = prompts[prompt_index];
        $('.requirement').html("Provide a "+ w.kind);
    }
    else {
        showFinal();
    }
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

    // Immediately show first prompt
    prompt_index = -1;
    nextPrompt();
}
