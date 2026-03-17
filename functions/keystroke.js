exports.handler=async(event)=>{const k=JSON.parse(event.body);console.log('⌨️ Key:',k.key);return{statusCode:200,body:'Key logged'};};
