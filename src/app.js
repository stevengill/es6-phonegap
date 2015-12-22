let app = {
    // Application Constructor
    initialize() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents() {
        document.addEventListener('deviceready', () => this.onDeviceReady(), false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is app due to us using arrow functions.
    onDeviceReady() {
        this.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log(`Received Event: ${id}`);
    }
};

app.initialize();

// example using import
/*
import uniq from 'uniq';

var arr = [1, 1, 2, 2, 3, 5]

console.log(arr);
uniq(arr);
console.log(arr);
*/
