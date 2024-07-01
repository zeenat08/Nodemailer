var express = require('express');
var router = express.Router();
const nodemailer =require ("nodemailer")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/send-mail', function(req, res, next) {
  res.render('send-mail');
});


router.post('/send-mail', function(req, res, next) {
  sendmail(req.body.email);
});

function sendmail(email, res) {
  const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      auth: {
          user: "zeenatkhanbfs@gmail.com",
          pass: "nkuejhirqrwwzwze",
      },
  });

  const mailOptions = {
      from: "Zeenat Pvt. Ltd.<zeenatkhanbfs@gmail.com>",
      to: email,
      subject: "Password Reset Link",
      html: `This is Test Mail`,
  };

  transport.sendMail(mailOptions, (err, info) => {
      if (err) return res.send(err);
      console.log(info);

      return res.send(
          "<h1 style='text-align:center;color: tomato; margin-top:10%'><span style='font-size:60px;'>✔️</span> <br />Email Sent! Check your inbox , <br/>check spam in case not found in inbox.</h1>"
      );
  });
}




module.exports = router;
