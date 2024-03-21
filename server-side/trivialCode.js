// Blocking code using callbacks
readFile(filename, (data)=>{
    doSomethingWithData(data, (modifiedData)=>{
        writeFile(modifiedData, ()=>{
            console.log('done');
        });
    })
});

