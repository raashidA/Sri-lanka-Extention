$(document).ready(function() {
  var textarray = [
    "'Life is a long lesson in humility' - James M. Barrie",
    "'Loving once and only once is possible - anything is possible.' - Nicholas Sparks",
    "'The worse my drawings were, the more beautiful did the originals appear.' - John James Audubon",
	"'I don't have a bank account because I don't know my mother's maiden name.' - Paula Poundstone",
	"'Kindness is in our power, even when fondness is not.' - Samuel Johnson",
	"'Love is the best thing in the world, and the thing that lives the longest.' - Henry Van Dyke",
	"'When one burns one's bridges, what a very nice fire it makes.' - Dylan Thomas",
	"'They do not love that do not show their love.' - William Shakespeare",
    "'Art is pattern informed by sensibility.' - Herbert Read"
];

function RndText() 
{
    var rannum = Math.floor(Math.random() * textarray.length);
    
    $('#random_text').fadeOut('slow', function() { 
        $(this).text(textarray[rannum]).fadeIn('slow');
    });
}

$(function() {
    // Call the random function when the DOM is ready:
    RndText(); 
});
var inter = setInterval(function() { RndText(); }, 10000);
});

