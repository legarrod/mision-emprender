self.addEventListener('install', function (event) {
	//console.log("Hello world from the Service Worker 🤙");
});

self.addEventListener('message', function (event) {
	// console.log('message', event);
});

self.addEventListener('fetch', function (event) {
	// console.log('fetch', event);
});
