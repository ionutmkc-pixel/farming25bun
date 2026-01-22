export default async function handler(req, res) {
  const url = "http://195.179.226.149:9080/feed/dedicated-server-stats.xml?code=NpKuTpPd1YJSAQj0";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      res.status(502).send("FAILED TO FETCH XML");
      return;
    }

    const xml = await response.text();

    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.status(200).send(xml);
  } catch (err) {
    res.status(500).send("SERVER ERROR");
  }
}
