// ############## Objects from a new Contexts in Nodejs##
const vm = require('vm');
module.exports = function(){
    const ContextObject = vm.runInNewContext('Object'); // We can get objects from a new context using runInNewContext.
    
    console.log(Object === ContextObject);// This returns false, so as with browser iframes, Object inside the context is not the same as in the main context.
    console.log(new Object() instanceof ContextObject);// Similarly, instanceof evalauates to false.
    console.log(ContextObject.name);// Once again, the constructors have the same name property.
};