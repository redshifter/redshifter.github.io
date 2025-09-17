function runGameList(thisGame) {
	var text =
		"<p><strong>Other Modes</strong><br/>" +
			//"<strong>" +
			(thisGame != "daily"
				? "<a href='daily.html'>Daily X-Stats</a>"
				: "Daily X-Stats"
			) +
			//"</strong>" +
		"<br/>" +
			//"<strong>" +
			(thisGame != "bracket"
				? "<a href='bracket.html'>Weekly Bracket</a>"
				: "Weekly Bracket"
			) +
			//"</strong>" +
		"<br/>" +
		"<br class='finePrint'/>" + // make a separator
			(thisGame != "streak"
				? "<a href='streak.html'>Winning Streak!</a>"
				: "Winning Streak!"
			) +
		"<br/>" +
			(thisGame != "sicko"
				? "<a href='streak.html?mode=sicko'>Sicko Mode</a>"
				: "Sicko Mode"
			) +
		"<br/>" +
			(thisGame != "balance"
				? "<a href='streak.html?mode=balance'>Balance Mode</a>"
				: "Balance Mode"
			) +
		"</p>"
	;
	document.getElementById("gameList").innerHTML = text
}
