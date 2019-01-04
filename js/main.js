(function() {
	"use strict";

	var collapsibles = document.getElementsByClassName("collapsible");
	for (var i = 0; i < collapsibles.length; i++) {
		collapsibles[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var content = this.nextElementSibling;
			if (content.style.display === "block") {
				content.style.display = "none";
			} else {
				content.style.display = "block";
			}

			var img = content.getElementsByClassName("content-img")[0];
			img.setAttribute("src", img.getAttribute("data-src"));
		});
	}

	document.getElementById("expand-all-button").onclick = function() {
		var collapsibles = document.getElementsByClassName("collapsible");
		for (var i = 0; i < collapsibles.length; i++) {
			if (!collapsibles[i].classList.contains("active")) {
				collapsibles[i].click();
			}
		}
	}
	document.getElementById("collapse-all-button").onclick = function() {
		var collapsibles = document.getElementsByClassName("collapsible");
		for (var i = 0; i < collapsibles.length; i++) {
			if (collapsibles[i].classList.contains("active")) {
				collapsibles[i].click();
			}
		}
	}

	/**
	 * Add a tooltip to all of a given class that will appear on hover.
	 */
	 function addTooltip(className, tooltipHtml) {
	 	var tags = document.getElementsByClassName(className);
	 	for (var i = 0; i < tags.length; i++) {
	 		var tooltip = document.createElement("span")
	 		tooltip.classList.add("tooltip-text");
	 		tooltip.innerHTML = tooltipHtml
	 		tags[i].appendChild(tooltip);
	 	}
	 }

	 addTooltip("difficulty-tag-easy", "Intended for players familiar with Minecraft survival mode.");
	 addTooltip("difficulty-tag-medium", "Well rounded challenge intended for players with minimal to moderate CTM experience.");
	 addTooltip("difficulty-tag-hard", "Intended for CTM veterans or anyone looking to test their mettle.");

	 addTooltip("length-tag-short", "Small, contained maps, usually with most gear being recieved at the start.");
	 addTooltip("length-tag-medium", "Moderately sized with some element of exploration. Gear is a good mix of being given and needing to be found.");
	 addTooltip("length-tag-long", "Comparable scale to an area in a full CTM map. Usually requires more collecting, crafting, and general survival.");

	 addTooltip("mc-version-tag", "Compatible Minecraft versions.");
	 addTooltip("map-version-tag", "Most recent version of this map.");
	 addTooltip("star-tag", "Not hardcore mode.");
	})();