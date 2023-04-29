const nodemailer = require("nodemailer");
//const config = require("../config/auth.config");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ojobabajide629@gmail.com",
    pass: "jqltfdkrytwsypoh",
  },
});

module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
  console.log("Check", name, email);
  transport
    .sendMail({
      from: "Swift Jet Support",
      to: email,
      subject: "Confirm your SwiftJets Account",
      html: `<html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Account Created Successfully</title>
        <style>
          body {
            background-color: #ffffff;
            font-family: Arial, sans-serif;
            font-size: 16px;
            line-height: 1.5;
            color: #333333;
            margin: 0;
            padding: 0;
          }
    
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
    
          h1 {
            color: #881337;
            font-size: 28px;
            font-weight: bold;
            margin-top: 0;
            margin-bottom: 20px;
            text-align: center;
          }
    
          p {
            margin-top: 0;
            margin-bottom: 20px;
            text-align: justify;
          }
    
          .button {
            display: inline-block;
            background-color: #961054;
            color: #ffffff !important;
            font-size: 18px;
            font-weight: bold;
            padding: 5px 40px;
            text-align: center;
            text-decoration: none;
            border-radius: 5px;
          }
    
          .footer {
            margin-top: 50px;
            text-align: center;
          }
    
          .footer a {
            color: #333333;
            text-decoration: none;
            margin-right: 20px;
          }
    
          .sender {
            font-size: 12px;
            margin-top: 20px;
            text-align: center;
          }
    
          .sender span {
            font-weight: bold;
          }
          .login-div{
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Account Created Successfully</h1>
          <p>Dear ${name},</p>
          <p>Your account has been successfully created. You can now log in and start using our services.</p>
         <div class="login-div">
         <a href="https://zippy-pudding-4a2533.netlify.app" class="button">Log In</a>
         </div>
          <div class="footer">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Us</a>
          </div>
          <div class="sender">
            <span>Swift wings</span><br />
            1234 Main Street, <br />
            Phone: 555-555-5555<br />
            Email: info@swiftwings.com
          </div>
        </div>
      </body>
    </html>`,
    })
    .catch((err) => console.log(err));
};
module.exports.resetPasswordEmail = (name, email, resetToken, userId) => {
  transport
    .sendMail({
      from: "ojobabajide629@gmail.com",
      to: email,
      subject: "Please, click the link below to reset your password",
      html: `
        
        <body style="background-color: #e9ecef;">

  <!-- start preheader -->
  <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">

  </div>
  <!-- end preheader -->

  <!-- start body -->
  <table border="0" cellpadding="0" cellspacing="0" width="100%">

    <!-- start logo -->
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
       
        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
    <!-- end logo -->

    <!-- start hero -->
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
              <h1 style="margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">Hello ${name}, confirm your email address</h1>
            </td>
          </tr>
        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
    <!-- end hero -->

    <!-- start copy block -->
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

          <!-- start copy -->
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
              <p style="margin: 0;">Tap the button below to confirm your email address. If you didn't create an account with <a href=https:kimlearn.app.netlify//>KimLearn</a>, you can safely delete this email.</p>
            </td>
          </tr>
          <!-- end copy -->

          <!-- start button -->
          <tr>
            <td align="left" bgcolor="#ffffff">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" bgcolor="#ffffff" style="padding: 12px;">
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center" bgcolor="#1a82e2" style="border-radius: 6px;">
                          <a href = https://kimlearn.netlify.app/passwordReset/token=${resetToken}&id=${id} target="_blank" style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">email confirmation link</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- end button -->

          <!-- start copy -->
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
              <p style="margin: 0;">If that doesn't work, copy and paste the following link in your browser:</p>
              <p style="margin: 0;"><a https://kimlearn.netlify.app/confirm/${confirmationCode} target="_blank">https://kimlearn.netlify.app/confirm/${confirmationCode}</a></p>
            </td>
          </tr>
          <!-- end copy -->

          <!-- start copy -->
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
              <p style="margin: 0;">Cheers,<br>KimLearn Team</p>
            </td>
          </tr>
          <!-- end copy -->

        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
    <!-- end copy block -->

    <!-- start footer -->
    <tr>
      <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

          <!-- start permission -->
          <tr>
            <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
              <p style="margin: 0;">You received this email because we received a request for an account creation. If you didn't make request, you can safely delete this email.</p>
            </td>
          </tr>
          <!-- end permission -->

          <!-- start unsubscribe -->
  
          <!-- end unsubscribe -->

        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
    <!-- end footer -->

  </table>
  <!-- end body -->

</body>`,
    })
    .catch((err) => console.log(err));
};
module.exports.bookingRecievedEmail = (email, booking_number, name) => {
  transport
    .sendMail({
      from: "Swift Jet Support",
      to: email,
      subject: "Flight Booking Confirmation",
      html: `<html>
      <head>
        <meta charset="UTF-8">
        <title>Booking Confirmation</title>
        <style>
          /* CSS styles */
          body {
            font-family: Arial, sans-serif;
            font-size: 16px;
            line-height: 1.5;
            margin: 0;
            padding: 0;
            background-color: #fff;
            color: #333;
          }
          h1 {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 16px;
            color: #fff;
            background-color: #881337;
            padding: 16px;
            text-align: center;
          }
          p {
            margin: 0 0 16px;
          }
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            padding: 8px;
            text-align: left;
            vertical-align: middle;
          }
          th {
            background-color: #f2f2f2;
            font-weight: bold;
          }
          tr:hover {
            background-color: #f5f5f5;
          }
          a {
            color: #881337;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .button {
            display: inline-block;
            padding: 8px 16px;
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            background-color: #881337;
            border-radius: 4px;
            text-decoration: none;
            text-align: center;
            transition: background-color 0.3s;
          }
          .button:hover {
            background-color: #881337;
          }
          .footer {
            background-color: #f2f2f2;
            color: #666;
            font-size: 14px;
            padding: 16px;
            text-align: center;
          }
          .footer a {
            color: #333;
            text-decoration: none;
          }
          .footer a:hover {
            text-decoration: underline;
          }
          .tracking-link{
            text-align:center;
          }
        </style>
      </head>
      <body>
        <h1 style="background-color: #881337; color: #fff; padding: 16px; text-align: center;">Booking Confirmation</h1>
        <p>Dear ${name},</p>
        <p>Thank you for choosing SwiftWings for your travel needs. Your booking has been confirmed with the following details:</p>
        <br>
        <br>
        <br>
        <table>
          <tr>
            <th style="background-color: #f2f2f2; font-weight: bold;">Your flight booking number is ${booking_number}</th>
            <td></td>
          </tr>
        </table>
        <br>
        <br>
        <br>
        <p>Please keep this email as your receipt for the booking. If you have any questions or concerns, please contact us at <a href="mailto:support@swiftwings.com">support@swiftwings.com</a>.</p>
        <p>To track your booking, please click the button below:</p>
        <p class="tracking-link"><a href="[Tracking URL]" class="button" style="background-color: #881337; color: #fff; display: inline-block; font-size: 16px; font-weight: bold; padding: 8px 16px; text-align: center; text-decoration
        :none; border-radius: 4px;">Track Booking</a></p>
        <br>
        <br>
        <br>
        <div class="footer">
        <p>Thank you for choosing SwiftWings!</p>
        <p>If you have any questions, please contact us at <a href="mailto:support@swiftwings.com">support@swiftwings.com</a>.</p>
        <p><a href="#">Privacy Policy</a> | <a href="#">Terms and Conditions</a></p>
        </div>
        
          </body>
        </html>
    
    
    
    `,
    })
    .catch((err) => console.log(err));
};
