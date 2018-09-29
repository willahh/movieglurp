// self.addEventListener('install', function(event) {
//     event.waitUntil(self.skipWaiting()); // Activate worker immediately
// });

self.addEventListener('install', function(event) {
    console.log('sw on install', event);
    
    event.waitUntil(self.skipWaiting()); // Activate worker immediately
});

self.addEventListener('message', function(event) {
    console.log('sw on message', event);
    
    var promise = self.clients.matchAll()
        .then(function(clientList) {
            console.log('promise then clientLIst:', clientLIst);
            var senderID = event.source.id;
            console.log('sendId', sendId);
            clientList.forEach(function(client) {
                console.log('client', client);
                if (client.id === senderID) {
                    return;
                }
                console.log('--> clien.postMessage');
                client.postMessage({
                    client: senderID,
                    message: event.data
                });
            });
        });
    if (event.waitUntil) {
        event.waitUntil(promise);
    }
    
});

self.addEventListener('activate', function(event) {
    console.log('sw activate');
    event.waitUntil(self.clients.claim());
});




// navigator.serviceWorker.addEventListener('message', function(event) {
//     console.log('sw navigator.serviceWorker on message', event);
    
//     ChromeSamples.setStatus(event.data);
// });