module.exports = async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const bannedIps = ['', ''];

  if (bannedIps.includes(ip)) {
    return res.status(403).json({ message: 'Your IP is banned.' });
  }
  return res.status(200).json({ message: '!codeword: eagle' });
};
