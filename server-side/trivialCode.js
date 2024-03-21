// Blocking code using callbacks
readFile(filename, (data)=>{
    doSomethingWithData(data, (modifiedData)=>{
        writeFile(modifiedData, ()=>{
            console.log('done');
        });
    })
});


// Async function to demonstrate non blocking code
async function nonBlocking(){
    const data = await readFile(filename);
    const modifiedData = await doSomethingWithData(data);
    await writeFile(filename);
    console.log('done');
}