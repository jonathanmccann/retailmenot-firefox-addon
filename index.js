// Set up necessary variables via "require"
var { ActionButton } = require("sdk/ui/button/action");
var contextMenu = require("sdk/context-menu");
var self = require("sdk/self");
var tabs = require("sdk/tabs");

// Create toggle button for toolbar
var button = ActionButton({
	id: "search-retailmenot",
	label: "Search RetailMeNot",
	icon: {
		"16": "./retailmenot-icon-16.png",
		"32": "./retailmenot-icon-32.png",
		"64": "./retailmenot-icon-64.png"
	},
	onClick: function(state) {
		searchRetailMeNot();
	}
});

// Create context menu item
var menuItem = contextMenu.Item({
	label: "Search RetailMeNot",
	context: contextMenu.PageContext(),
	contentScript: 'self.on("click", function () {' +
				   '	self.postMessage();' +
				   '});',
	onMessage: function () {
		searchRetailMeNot();
	}
});

function searchRetailMeNot() {
	tabs.open("http://www.retailmenot.com/search.php?query=" + encodeURIComponent(tabs.activeTab.url));
}