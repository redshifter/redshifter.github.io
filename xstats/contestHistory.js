function contestHistory(name1, name2) {
	resetInfo();
	if( name1 == null || name2 == null ) return
	
	var contestInfo = document.getElementById("contestInfo");
	var names = [name1, name2];
	
	for( var i = 0; i < 2; i++ ) {
		var vis = ""
		if( names[i].indexOf("Summer 2002") > -1 ) vis = "Summer2002"
		else if( names[i].indexOf("Summer 2003") > -1 ) vis = "Summer2003"
		else if( names[i].indexOf("Summer 2004") > -1 ) vis = "Summer2004"
		else if( names[i].indexOf("Spring 2005") > -1 ) vis = "Spring2005"
		else if( names[i].indexOf("Summer 2005") > -1 ) vis = "Summer2005"
		else if( names[i].indexOf("Summer 2006") > -1 ) vis = "Summer2006"
		else if( names[i].indexOf("Summer 2007") > -1 ) vis = "Summer2007"
		else if( names[i].indexOf("Fall 2008") > -1 ) vis = "Fall2008"
		else if( names[i].indexOf("Winter 2010") > -1 ) vis = "Winter2010"
		else if( names[i].indexOf("Summer 2013") > -1 ) vis = "Summer2013"
		else if( names[i].indexOf("Fall 2018") > -1 ) vis = "Fall2018"
		else {
			arrowed(names[i])
			return
		}
		
		try {
			document.getElementById(vis).style.display = ""
		}
		catch( e ) {
			arrowed(vis)
		}
	}
}

function resetInfo() {
	try {
		// i'm sure there's a better way to do this. but i just don't care
		document.getElementById("contestInfo").innerHTML =
			"<span style='display:none' id='Summer2002'>Summer 2002 was Basic 1v1. Link = 50%<br/></span>" +
			"<span style='display:none' id='Summer2003'>Summer 2003 was Basic 1v1. Cloud = 50%<br/></span>" +
			"<span style='display:none' id='Summer2004'>Summer 2004 was Basic 1v1. Link = 50%<br/></span>" +
			"<span style='display:none' id='Spring2005'>Spring 2005 was 1v1, Villains. Sephiroth = 45% [NOT 50, THIS IS A PATCH]<br/></span>" +
			"<span style='display:none' id='Summer2005'>Summer 2005 was Basic 1v1. Link = 50%<br/></span>" +
			"<span style='display:none' id='Summer2006'>Summer 2006 was 1v1, Male/Female. Samus = 40% [NOT 50]<br/></span>" +
			"<span style='display:none' id='Summer2007'>Summer 2007 was 4-way. L-Block = 50%<br/></span>" + // i do not have xstats for this
			"<span style='display:none' id='Fall2008'>Fall 2008 was 4-way. Link = 50%<br/></span>" + // we don't really want this one
			"<span style='display:none' id='Winter2010'>Winter 2010 was 1v1, 12 hour matches. Link = 50%<br/></span>" +
			"<span style='display:none' id='Summer2013'>Summer 2013 was 3-way. Draven = 50%<br/></span>" + // do we really even want this one?
			"<span style='display:none' id='Fall2018'>Fall 2018 was 1v1. Link = 50%<br/></span>"
	}
	catch( e ) {
		arrowed("contest info");
	}
}