Module.register("MMM-QOTD", {
	requiresVersion: "2.1.0",

	defaults: {
		updateInterval: 60 * 60 * 1000, // rotate every hour
		animationSpeed: 2000,
	},

	start() {
		this.quote = null;
		this.fetchQuote();
		setInterval(() => this.fetchQuote(), this.config.updateInterval);
	},

	fetchQuote() {
		this.sendSocketNotification("FETCH_QUOTE");
	},

	getDom() {
		const wrapper = document.createElement("div");
		if (!this.quote) return wrapper;

		const text = document.createElement("div");
		text.className = "qotd-text";
		text.textContent = `"${this.quote.text}"`;

		const author = document.createElement("div");
		author.className = "qotd-author";
		author.textContent = `— ${this.quote.author}`;

		wrapper.appendChild(text);
		wrapper.appendChild(author);
		return wrapper;
	},

	socketNotificationReceived(notification, payload) {
		if (notification === "QUOTE_DATA") {
			this.quote = payload;
			this.updateDom(this.config.animationSpeed);
		}
	},
});
