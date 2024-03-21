const ID = Math.floor(Math.random() * 999999); // <1> Random ID for debugging
console.log('shared-worker.js', ID);

const ports = new Set(); // <2> Singleton list of ports

self.onconnect = (event) => { // <3> Connection event handler
    const port = event.ports[0];
    ports.add(port);
    console.log('CONN', ID, ports.size);

    port.onmessage = (event) => { // <4> Callback when a new message is received
        console.log('MESSAGE', ID, event.data);

        for(let p of ports){ // <5> Messages are dispatched to each window
            p.postMessage([ID, event.data]);
        }
    };
};


