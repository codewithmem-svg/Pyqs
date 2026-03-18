exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    console.log('💓 PING received - Victim still active');
    return {
      statusCode: 200,
      body: JSON.stringify({alive: true})
    };
  }
  return { statusCode: 200, body: 'Ping endpoint' };
};
