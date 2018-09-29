// sw
$(function() {
    if (navigator.serviceWorker) {
        console.log('navigator.serviceWorker true');
        var message = document.getElementById('message');
        var received = document.getElementById('received');
        var status = document.getElementById('status');
        var inbox = {};
        
        console.log('message', message);
        console.log('received', received);
        console.log('status', status);
        console.log('inbox', inbox);
        
        status.textContent = 'supported';
        
        navigator.serviceWorker.register('/js/sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
        
        console.log('navigator.serviceWorker', navigator.serviceWorker);
        
        navigator.serviceWorker.addEventListener('message', function(event) {
            console.log('on serviceWorker message', event);
            
            var clientId = event.data.client;
            var node;
            
            console.log('clientId', clientId);
            
            if (!inbox[clientId]) {
                node = document.createElement('div');
                received.appendChild(node);
                inbox[clientId] = node;
                
                console.log('node', node);
            } else {
                console.warn('inbox[clientId]');
            }
            node = inbox[clientId];
            node.textContent = 'Client ' + clientId + ' says: ' + event.data.message;
            
            console.log('node.textContent', node.textContent);
        });
        
        message.addEventListener('input', function() {
            console.log('on message input' , arguments);
            
            if (!navigator.serviceWorker.controller) {
                console.log('!navigator.serviceWorker.controller');
                status.textContent = 'error: no controller';
                return;
            }
            
            console.log('-------> postMessage:', message.value);
            navigator.serviceWorker.controller.postMessage(message.value);
        });
    }
});