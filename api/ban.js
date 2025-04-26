export default async (req, res) => {
  // Get the user's IP address
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || '';

  // Clean up the IPv6-wrapped IPv4 address format if necessary
  if (ip.startsWith('::ffff:')) {
    ip = ip.replace('::ffff:', '');
  }

  // Get the banned IPs from environment variables (comma-separated list)
  const bannedIps = process.env.BANNED_IPS ? process.env.BANNED_IPS.split(',') : [];

  // Log the visitor's IP (you can remove this once you confirm it works)
  console.log('Visitor IP:', ip);

  // Check if the IP is in the banned list
  if (bannedIps.includes(ip)) {
    // If the IP is banned, redirect them to /banned.html
    return res.redirect('/banned.html');
  }

  // If the IP is not banned, allow them to access the site
  return res.status(200).json({ allowed: true });
};
