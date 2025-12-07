import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  try {
    const { message } = req.body;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Anon Message <onboarding@resend.dev>",
      to: "rizz9579@gmail.com",
      subject: "Pesan Anonim Baru Masuk!",
      html: `<p>${message}</p>`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error sending email" });
  }
}
