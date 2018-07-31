'use strict';

/**
 * Main Project Config
 * https://www.npmjs.com/package/config
 */

const extend = require('extend');
const baseConfig = require('@nitro/app/app/core/config');
const defaultConfig = {
	code: {
		validation: {
			eslint: {
				live: true,
			},
			htmllint: {
				live: true,
			},
			jsonSchema: {
				live: true,
				logMissingSchemaAsError: false,
				logMissingSchemaAsWarning: true,
			},
			stylelint: {
				live: true,
			},
		},
	},
	nitro: {
		viewFileExtension: '<%= options.viewExt %>',
		templateEngine: '<%= options.templateEngine %>',
		patterns: require('./default/patterns'),
		mode: {
			livereload: true,
			offline: false,
		},
		watch: {
			partials: true,
			throttle: {
				base: 1000,
				cache: 3000,
			},
		},
	},
	server: {
		port: 8080,
		proxy: 8081,
	},
	gulp: require('./default/gulp'),
	feature: {
		i18next: {
			middlewareOptions: {
				ignoreRoutes: ['api/', 'assets/', 'dist/', 'content/'],
			}
		},
	},<% if (options.exporter) { %>
	exporter: require('./default/exporter'),<% } %>
};

const config = extend(true, {}, baseConfig, defaultConfig);

module.exports = config;