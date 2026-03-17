exports.handler=async(event)=>{const g=JSON.parse(event.body);console.log('📍 GPS:',g.lat,g.lng);return{statusCode:200,body:'GPS OK'};};
