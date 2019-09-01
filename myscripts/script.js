var idioms = [
'Once in a blue moon = Very rarely.', 

'Tickled pink = To be extremely pleased.', 

'Caught red-handed = To catch someone in the act of doing something.',
    
'A white lie = A small lie that is told to be polite or avoid hurting someone’s feelings.',
    
'Out of the blue = Unexpectedly.'
];

var examples = [
'Example: <i>Once in a blue moon you might see a solar eclipse.</i>', 

'Example: <i>Your grandma was tickled pink that you called on her birthday!</i>', 

'Example: <i>He was caught red-handed while stealing those biscuits.</i>',
    
'Example: <i>I didn’t like her dress, but I told a white lie because I didn’t want to offend her.</i>',
 
'Example: <i>My sister phoned me out of the blue last week. She hadn\'t phoned for ages.</i>'
];

var quoteNo;
function loadQuote() {
    var idiomNo = Math.floor(Math.random() * (idioms.length));
    if(idiomNo != quoteNo) {
    //alert(quotes[quoteNo]);
    	document.getElementById("quote").innerHTML = "<dt>" + idioms[idiomNo] + "</dt>" + "<dd>" + examples[idiomNo] + "</dd>"
   		quoteNo = idiomNo;
    	return quoteNo;
    	}
    	else {
    	loadQuote();
    	}
	}
loadQuote();
