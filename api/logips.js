
export default async (req, res) => {
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || '';

  // If it starts with "::ffff:", it's IPv4 wrapped inside IPv6 format
  if (ip.startsWith('::ffff:')) {
    ip = ip.replace('::ffff:', '');
  }

  console.log('Visitor IP:', ip); // 👈 This will show up in your Vercel function logs!

  res.status(200).json({ ip: ip }); // Sends the IP back in the browser too if you want to see it
};
