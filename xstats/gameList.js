function runGameList(thisGame) {
	var text =
		"<p><strong>Other Modes</strong><br/>" +
			(thisGame != "daily"
				? "<a href='daily.html'>Daily Game</a>"
				: "Daily Game"
			) +
		"<br/>" +
			(thisGame != "streak"
				? "<a href='streak.html'>Winning Streak!</a>"
				: "Winning Streak!"
			) +
		"</p>"
	;
	document.getElementById("gameList").innerHTML = text
}
