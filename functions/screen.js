exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    const body = await event.body;
    console.log('📸 Screenshot received:', body.length, 'bytes');
    return {
      statusCode: 200,
      body: JSON.stringify({message: 'Screenshot saved'})
    };
  }
  return { statusCode: 200, body: 'Screen endpoint' };
};
