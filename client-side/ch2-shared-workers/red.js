console.log('red.js');

const worker = new SharedWorker('shared-worker.js'); // <1> Instantiate the shared worker

worker.port.onmessage = (event) => { // <2> Note the worker.port property for communications
    console.log('EVENT', event.data);
}
