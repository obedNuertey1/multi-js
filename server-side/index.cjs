// // Hello, World
// import http from 'http';
// import cluster from 'cluster';

// if(cluster.isPrimary){
//     for(let i=0; i < 4; i++) cluster.fork();
// }else{
//     http.createServer((req, res)=>{
//         res.end('Hello, World!\n');
//     }).listen(3000);
// }



// // Passing data to a worker thread via workerData
// const {Worker, isMainThread, workerData} = require("worker_threads");
// const assert = require('assert');

// if(isMainThread){
//     const worker = new Worker(__filename, {workerData: {num: 42}});
// }else{
//     assert.strictEqual(workerData.num, 42);
// }



// // Bidirectional communication via the default MessagePorts
// const {Worker, isMainThread, parentPort} = require('worker_threads');

// if(isMainThread){
//     const worker = new Worker(__filename);
//     worker.on('message', msg=>{
//         worker.postMessage(msg);
//     });
// }else{
//     parentPort.on('message', msg=>{
//         console.log('We got a message from the main thread', msg);
//     });
//     parentPort.postMessage('Hello, World!');
// }



// Bidirectional communication via MessagePort created with MessageChannel
// We Use MessageChannel if two threads that are not the parent thread  needs to communicate with each other

// const {Worker, isMainThread, MessageChannel, workerData} = require('worker_threads');

// if(isMainThread){
//     const {port1, port2} = new MessageChannel();
//     const worker = new Worker(__filename, {
//         workerData: {
//             port: port2
//         },
//         transferList: [port2]
//     });
//     port1.on('message', msg => {
//         port1.postMessage(msg);
//     })
// }else{
//     const {port} = workerData;
//     port.on('message', msg => {
//         console.log('We got a message from the main thread:', msg);
//     });
//     port.postMessage('Hello, World!');
// }

const crypto = require('crypto');
const myPassword = "nuertey1997kofiObed@Dev1234567890";
let sumCodes = 0;
for(let i=0; i < myPassword.length; i++){
    sumCodes += myPassword.charCodeAt(i);
}


const big64arr = new BigUint64Array(sumCodes);
console.log(crypto.randomUUID(big64arr))
console.log(crypto.randomFillSync(big64arr))
console.log(big64arr[0]);