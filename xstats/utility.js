function buildMatchResult(match, count, choice, xstats) {
	var answer = ["✔️", "❌"]
	var box1 = ""
	var box2 = ""
	var oops = ""
	
	if( xstats != null ) {
		if( choice == null ) {
			oops = answer[1] + match.choice + " (N/A)<br/>"
		}
		else if( choice == xstats ) {
			if( choice ) box2 = answer[0]; else box1 = answer[0];
		}
		else {
			if( choice ) box2 = answer[1]; else box1 = answer[1];
		}
	}
	
	var text = 
			box1 + match.ch1 + " (" + match.x1 + "%) <br/>" +
			box2 + match.ch2 + " (" + match.x2 + "%) <br/>" +
			oops +
			"<span class='fineprint'>Difficulty: " + getDifficulty(match.win) + "</span>"

	if( count > 0 ) {
		return "<p><strong>Match " + count + "</strong><br/>" + text + "</p>"
	}
	else {
		return text
	}
}

function getDifficulty(val) {
	// these thresholds were decided by using an (outdated) spreadsheet against a thousand matches. eh it's probably fine
	var x = Math.abs(val)
	if( x == 0 ) {
		return "BUGGED" // there's supposed to be validation to keep a tie from happening. please report this
	}
	else if( x < 0.16 ) {
		return "LUSTER LEGENDARY!!!" // 1.0% (1.0%)
	}
	else if( x < 0.60 ) {
		return "SUPER LEGENDARY!" // 2.5% (3.5%)
	}
	else if( x < 1.40 ) {
		return "LEGENDARY" // 6.5% (10.0%)
	}
	else if( x < 2.90 ) {
		return "Very Hard" // 10.0% (20.0%)
	}
	else if( x < 6.15 ) {
		return "Hard" // 20.0% (40.0%)
	}
	else if( x < 11.4 ) {
		return "Medium" // 25.0% (65.0%)
	}
	else if( x < 18.0 ) {
		return "Easy" // 20.0% (85.0%)
	}
	else {
		return "Very Easy" // 15.0% (100.0%)
	}
}