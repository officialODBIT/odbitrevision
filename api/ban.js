// api/ban.js
module.exports = async (req, res) => {
  // Get the user's IP address from the request
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // List of banned IPs (for testing, you can hardcode some)
  const bannedIps = ['172.56.220.2', '98.76.54.32'];

  // Check if the IP is banned
  if (bannedIps.includes(ip)) {
    return res.status(403).json({ message: 'Your IP is banned.' });
  }

  // If the IP is not banned
  return res.status(200).json({ message: 'Welcome!' });
};
