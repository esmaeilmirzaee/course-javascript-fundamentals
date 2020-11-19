function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to location ${location}`);
    if (location === 'Google') {
      resolve('Google says Hi');
    } else {
      reject('We can just talk to Google');
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing response');
    resolve(`Extra information ${response}`);
  });
}

// makeRequest('Google')
//   .then((response) => {
//     console.log(`Response recieved`);
//     return processRequest(response);
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Half two
// async function doWork() {
//   const response = await makeRequest('Google');
//   console.log('Response Recieved');
//   const processedResponse = await processRequest(response);
//   console.log(processedResponse);
// }

// doWork();

// Half Three
async function doWork() {
  try {
    const response = await makeRequest('Facebook');
    console.log('Response recieved');
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}

doWork();
