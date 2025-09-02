function runGameList(thisGame) {
	var text =
		"<p><strong>Other Modes</strong><br/>" +
			(thisGame != "daily"
				? "<a href='daily.html'>Daily X-Stats</a>"
				: "Daily X-Stats"
			) +
		"<br/>" +
			(thisGame != "bracket"
				? "<a href='bracket.html'>Weekly Bracket</a>"
				: "Weekly Bracket"
			) +
		"<br/>" +
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
