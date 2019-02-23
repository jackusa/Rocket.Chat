Package.describe({
	name: 'rocketchat:federation',
	version: '0.0.1',
	summary: 'RocketChat support for federating with other RocketChat servers',
	git: '',
});

Package.onUse(function(api) {
	api.use([
		'ecmascript',
		'rocketchat:api',
		'rocketchat:lib',
		'rocketchat:reactions',
		'rocketchat:models',
		'rocketchat:settings',
	]);

	api.use('accounts-base', 'server');
	api.use('accounts-password', 'server');

	api.mainModule('server/index.js', 'server');
});

Npm.depends({
	'queue-fifo': '0.2.5',
	'node-rsa': '1.0.2',
	uuid: '3.3.2',
});
