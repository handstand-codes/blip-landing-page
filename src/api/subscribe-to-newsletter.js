/* eslint-disable func-names */
/* eslint-disable consistent-return */
const axios = require(`axios`);

const subscribeToNewsletter = async (req, res) => {
  if (!req.body) {
    return res.status(500).json({ error: `Invalid data` });
  }
  try {
    const NEWSLETTER_LIST_ID = `YqZLti`;
    const url = `https://a.klaviyo.com/api/v2/list/${NEWSLETTER_LIST_ID}/subscribe?api_key=${process.env.KLAVIYO_PRIVATE_API_KEY}`;
    const response = await axios.post(url, req.body);
    return res.status(200).json(response.data);
  } catch (err) {
    return res.status(500).json({
      statusCode: 500,
      body: err
    });
  }
};

export default subscribeToNewsletter;
