var idioms = [
'Once in a blue moon = very rarely.', 

'Tickled pink = to be extremely pleased.', 

'Caught red-handed = to catch someone in the act of doing something.',
    
'White lie = a small lie that is told to be polite or avoid hurting someone’s feelings.'
];

var examples = [
'Example: <i>Once in a blue moon you will see that mean professor smile.</i>', 

'Example: <i>Your grandma was tickled pink that you called on her birthday!</i>', 

'Example: <i>He was caught red-handed while stealing those biscuits.</i>',
    
'Example: <i>I didn’t like her dress, but I told a white lie because I didn’t want to offend her.</i>'
];

function loadQuote() {
    var idiomNo = Math.floor(Math.random() * (idioms.length));
    //alert(quotes[quoteNo]);
    document.getElementById("quote").innerHTML = "<dt>" + idioms[idiomNo] + "</dt>" + "<dd>" + examples[idiomNo] + "</dd>"
}
loadQuote();
