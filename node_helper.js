const NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
	async fetchQuote() {
		try {
			const res = await fetch("https://zenquotes.io/api/random");
			const data = await res.json();
			const item = data[0];
			this.sendSocketNotification("QUOTE_DATA", {
				text: item.q,
				author: item.a,
			});
		} catch (e) {
			console.error("[MMM-QOTD] Error fetching quote:", e);
		}
	},

	socketNotificationReceived(notification) {
		if (notification === "FETCH_QUOTE") {
			this.fetchQuote();
		}
	},
});
