// Config - Custom Environment Variables
// https://github.com/lorenwest/node-config/wiki/Environment-Variables#custom-environment-variables

'use strict';

const config = {
	server: {
		port: 'PORT',
		proxy: 'PROXY',
	},
};

module.exports = config;