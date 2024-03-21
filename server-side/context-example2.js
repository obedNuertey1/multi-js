// Node.js example using vm module to create a new context (realm)
const vm = require('vm');
module.exports = function(){
    // Creating a new context (realm)
    const myContext = vm.createContext();
    
    // Running code in the new context
    const result = vm.runInContext('2 + 3', myContext);
    console.log(result); //Output: 5
    
    // Accessing global objects from the new context
    const newObject = vm.runInContext('Object', myContext);
    console.log(newObject === Object); // Output: false
}