const axios = require(`axios`);

const submitEnquiry = async (req, res) => {
  if (!req.body) {
    return res.status(500).json({ error: `Invalid data` });
  }
  try {
    const CONTACT_LIST_ID = `PUT ID HERE`;
    const url = `https://a.klaviyo.com/api/v2/list/${CONTACT_LIST_ID}/members?api_key=${process.env.KLAVIYO_PRIVATE_API_KEY}`;
    const response = await axios.post(url, req.body);
    return res.status(200).json(response.data);
  } catch (err) {
    return res.status(500).json({
      statusCode: 500,
      body: err
    });
  }
};

export default submitEnquiry;
