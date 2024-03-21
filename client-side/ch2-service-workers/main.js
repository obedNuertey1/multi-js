// navigator.serviceWorker.register('/sw.js', { // <1>
//     scope: '/'
//   });
  
//   navigator.serviceWorker.oncontrollerchange = () => { // <2>
//     console.log('controller change');
//   };
  
//   async function makeRequest() { // <3>
//     const result = await fetch('/data.json');
//     const payload = await result.json();
//     console.log(payload);
//   }


navigator.serviceWorker.register('/sw.js', {
  scope: '/'
})

navigator.serviceWorker.oncontrollerchange = () => {
  console.log('controller change');
};

async function makeRequest(){
  const result = await fetch('/data.json');
  const payload = await result.json();
  console.log(payload);
}