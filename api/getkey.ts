export default function handler(req, res) {
  const key = process.env.xapikey;

  res.status(200).json({ key });
}
