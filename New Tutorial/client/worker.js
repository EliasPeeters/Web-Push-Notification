console.log('Service Worker Loaded');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('Push recieved...');

    self.ServiceWorkerRegistration.showNotification(data.title, {
        body: 'Notified by me',
    });
});