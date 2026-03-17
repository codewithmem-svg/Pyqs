exports.handler=async(event)=>{if(event.httpMethod==='POST'){const b=await event.body;console.log('📸 Screenshot:',b.length);return{statusCode:200,body:'OK'};}};
