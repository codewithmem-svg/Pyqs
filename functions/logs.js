exports.handler = async (event) => {
  const logs = `
📸 Screenshot #${Math.floor(Math.random()*10)} - 245KB
📍 GPS: 28.6139° N, 77.2090° E (10m accuracy)  
⌨️ Keys: p-a-s-s-w-o-r-d-1-2-3
🔋 Battery: 73% - Charging: No
📶 Network: 4G - 25Mbps
📱 Device: Android 11 - Model: SM-G973F
💾 Storage: 12GB free / 64GB
🕒 Last seen: ${new Date().toLocaleString()}
  `;
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: logs
  };
};
