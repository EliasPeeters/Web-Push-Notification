const publicVapidKey = 'BDLfHGkFuzztS1e3cON1rGYFP1HPIERPFnc5wxtX8war7XZy2Niyjfnr3f3BQ_izJkAkElj9vXYXxsEh0kybWyE';

//Check for service worker
if ('serviceWorker' in navigator) {
    send().catch(err => console.error(err))
}

// register SW, register Push, Send Push
async function send() {
    // Register Service Worker
    console.log('Registering service worker...')
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/'
    });
    console.log('SW registered...');

    //Register Push
    console.log('Registering Push...')
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicVapidKey
    })
    console.log('Push Registered');

    //Send Push Notification
    console.log('Sending push');
    await fetch('/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        header: {
            'content-type': 'application/json'
        }
    });
    console.log('Push sent...')
}