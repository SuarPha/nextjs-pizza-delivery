
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (req, res) => {
    const body = JSON.parse(req.body);
  
    const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  await sgMail.send({
    to: 'to.name@email.com',
    from: 'suarpha.k@gmail.com',
    subject: 'New Message!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  });

  res.status(200).json({status: 'Email sent successfully'});
}
/*
require('dotenv').config()

const sgMail = require('@sendgrid/mail')

//const {SG_API_KEY, FROM_EMAIL, TO_EMAIL} = process.env



export default async (req, res) => {
    const { email, subject, message, name } = req.body
    const msg = {
      to: 'suarpa.golf2@gmail.com',
      from: 'suarpa.golf@gmail.com',
      subject: 'Sending email with sendgrid',
      text: 'This is an example email sent from Next.js and Sendgrid',
      html: '<strong>This is an example email sent from Next.js and Sendgrid</strong>',
    };
  
    try {
      await sgMail.send(msg);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error(error);
      res.status(400).send('Email sent failed');
    }
  };

  */