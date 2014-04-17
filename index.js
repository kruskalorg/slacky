var slackytoken = process.env.SLACKY_TOKEN;

var MY_SLACK_WEBHOOK_URL = 'https://newcoco.slack.com/services/hooks/incoming-webhook?token=' + slackytoken;
var slack = require('slack-notify')(MY_SLACK_WEBHOOK_URL);


var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded());

app.post('/stashmessage', function(req, res) {

    slack.send({
        channel: '#deep-thoughts',
        icon_emoji: ':beer:',
        text: req.body["stripped-text"],
        username: 'Slacky',
        "mrkdwn": true
    });

    res.send('thanks');
});

app.listen(3343);