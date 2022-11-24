/*$(document).keypress(function(event){
	$("h1").text(event.key);
});
*/

$("h1").before("<button>New</button>");
$("h2").after( "<b>Text added before h2</b>");
$("h3").prepend("<button>New</button>");
$("h4").append("<button>New</button>");