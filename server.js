const express = require('express');
const axios = require('axios');
const app = express();
const createMessageData = require('./massage01.js');
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config();

const PORT = 8888;
const LINE_BOT_API = 'https://api.line.me/v2/bot';
const LINE_CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;

const header = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`
};

const sendMessage = async (userId, messageData) => {
    const body = { ...messageData, to: userId };
    // body.to = userId;

    try {
        const response = await axios.post(`${LINE_BOT_API}/message/push`, body, { headers: header });
        return response.data;
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// app.post('/send-message', async (userId, message) => {
//     try {
//         const { userId, message } = req.body;
//         const response = await sendMessage(userId, message);

//         return res.status(200).send({ success: true, data: response });
//     } catch (error) {
//         console.error('Error:', error.response ? error.response.data : error.message);

//         return res.status(500).send({
//             details: error.response ? error.response.data : error.message
//         });
//     }
// });

app.post('/webhook', async (req, res) => {
    const { events } = req.body;
    console.log(req.body)
    if (!events || events.length === 0) {
        res.json({
            message: "Ok"
        })
        return false
    }

    try {
        const lineEvent = events[0];
        const userId = lineEvent.source.userId;
        const keyword = lineEvent.message.text;
        console.log('User Message:', keyword);

        const messageData = await createMessageData(keyword);
        

        const response = await sendMessage(userId, messageData);

        return res.status(200).send({ success: true, data: response });
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);

        return res.status(500).send({
            details: error.response ? error.response.data : error.message
        });
    }

})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});