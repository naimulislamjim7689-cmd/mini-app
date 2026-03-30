const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let users = {};

// get user
app.post('/user', (req, res) => {
    const id = req.body.id;

    if (!users[id]) {
        users[id] = {
            balance: 0,
            last_ad_time: 0
        };
    }

    res.json(users[id]);
});

// watch ad
app.post('/watch', (req, res) => {
    const id = req.body.id;
    const user = users[id];
    const now = Date.now();

    if (now - user.last_ad_time < 15000) {
        return res.json({ success: false });
    }

    user.last_ad_time = now;
    user.balance += 1;

    res.json({ success: true, balance: user.balance });
});

app.listen(3000, () => console.log("Server running on port 3000"));