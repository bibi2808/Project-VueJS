const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "waiwaitei2delivery@gmail.com", // tanukikouji@waiwaitei.com
    pass: "unifiedx355",
  },
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const name = req.body.name;
    const address = req.body.address;
    const tel = req.body.tel;
    const date = req.body.date;
    const time = req.body.time;
    const cart = req.body.cart;
    const totalCost = req.body.totalCost;
    functions.logger.info(" Here's info:", req.body);

    var html = "";

    cart.forEach((item, index) => {
      if (index === 0) {
        html +=
          `<td style="border: 1px solid black;text-align: left;padding: 8px;">` +
          item.name +
          `</td><td style="border: 1px solid black;text-align: center;padding: 8px;"> x ` +
          item.quantity +
          `</td><td style="border: 1px solid black;text-align: right;padding: 8px;"> = ` +
          item.quantity * item.price +
          ` 円</td></tr>`;
      } else {
        html +=
          `<tr><td style="border: 1px solid black;text-align: left;padding: 8px;">` +
          item.name +
          `</td><td style="border: 1px solid black;text-align: center;padding: 8px;"> x ` +
          item.quantity +
          `</td><td style="border: 1px solid black;text-align: right;padding: 8px;"> = ` +
          item.quantity * item.price +
          ` 円</td></tr>`;
      }
    });

    const mailOptions = {
      from: "waiwaitei2delivery@gmail.com <waiwaitei2delivery@gmail.com>",
      to: "waiwaitei2delivery@gmail.com",
      subject: "Contact Form Message",
      html:
        `<div>
			<div><h1 style="color: green;text-align: left;">ご注文情報</h1></div>
			<div>
				<table style="font-family: arial, sans-serif;border-collapse: collapse;width: 50%">
			<tr>
			  	<td style="border: 1px solid black;text-align: center;padding: 8px;font-weight: bold;">お名前</td><td colspan=3 style="border: 1px solid black;text-align: left;padding: 8px;">` +
        name +
        `</td>
				</tr>
				<tr>
					<td style="border: 1px solid black;text-align: center;padding: 24px;font-weight: bold;">ご住所</td><td colspan=3 style="border: 1px solid black;text-align: left;padding: 8px;">` +
        address +
        `</td>
				</tr>
				<tr>
					<td style="border: 1px solid black;text-align: center;padding: 8px;font-weight: bold;">お電話番号</td><td colspan=3 style="border: 1px solid black;text-align: left;padding: 8px;">` +
        tel +
        `</td>
				</tr>
				<tr>
					<td style="border: 1px solid black;text-align: center;padding: 8px;font-weight: bold;">配達日</td><td colspan=3 style="border: 1px solid black;text-align: left;padding: 8px;">` +
        date +
        `</td>
				</tr>
				<tr>
					<td style="border: 1px solid black;text-align: center;padding: 8px;font-weight: bold;">お届け時間</td><td colspan=3 style="border: 1px solid black;text-align: left;padding: 8px;">` +
        time +
        `</td>
				</tr>
				<tr>
					<td rowspan=` +
        cart.length +
        ` style="border: 1px solid black;text-align: center;padding: 8px;font-weight: bold;">ご注文</td>` +
        html +
        `<tr>
					<td style="border: 1px solid black;text-align: center;padding: 8px;font-weight: bold;">お支払い金額(税込)
					</td><td colspan=3 style="border: 1px solid black;text-align: left;padding: 8px;text-align:right">` +
        totalCost +
        ` 円</td>
				</tr>
			</div>` +
        `</div>`,
    };

    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send("Message Sent");
    });
  });
});
