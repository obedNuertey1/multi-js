const worker = new RpcWorker('worker.js');

const funcs = [
    ['square_sum', 1_000_000],
    ['fibonacci', 1000],
    ['fake_method'],
    ['bad']
];

let myPromises = funcs.map(async (elem)=>{
    if(elem[1]){
        return await worker.exec(elem[0], ...elem.slice(1, elem.length));
    }
    return await worker.exec(elem[0]);
});

(async (prom)=>{
    try{
        const [square_sum, fibonacci, fake, bad] = await Promise.allSettled(prom);
        console.log('square_sum ', square_sum);
        console.log('fibonacci ', fibonacci);
        console.log('fake ', fake);
        console.log('bad ', bad);
    }catch(e){
        console.log(e);
    }
})(myPromises);