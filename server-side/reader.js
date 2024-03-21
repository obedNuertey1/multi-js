// ######## Reading from files concurrently in Node.js #########3 
const fs = require('fs/promises');
const { cwd } = require('process');

module.exports = function(){
    async function getNum(filename){
        return parseInt(
            await fs.readFile(filename, 'utf8'),
            10
        );
    }
    
    (async function(){
        try{
            const numberPromises = [1, 2, 3].map((i)=>{
                return getNum(`${cwd()}/numbers/${i}.txt`);
            });
            const numbers = await Promise.all(numberPromises);
            let accum = 0;
            for(let i = 0; i < numbers.length; i++){
                accum += numbers[i];
            }
            console.log(accum);
        }catch(e){
            console.error("Something went wrong:");
            console.error(e.stack);
        }
    })();
}
