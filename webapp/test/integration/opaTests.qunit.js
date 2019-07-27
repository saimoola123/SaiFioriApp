/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"sai/moola/SaiFioriDemo/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});