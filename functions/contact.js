exports.handler = async () => {
  // SMS/Call permissions
  return {
    statusCode: 200,
    body: JSON.stringify({
      sms: 'SMS data here',
      calls: 'Call logs here'
    })
  };
};
