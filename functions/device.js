exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    const device = JSON.parse(event.body);
    console.log('📱 Device:', device.ua.substring(0, 50));
    return {
      statusCode: 200,
      body: JSON.stringify({message: 'Device fingerprint saved'})
    };
  }
  return { statusCode: 200, body: 'Device endpoint' };
};
