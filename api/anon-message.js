import { Resend } from "resend";

export default async function handler(req, res) {
  // CORS FIX (penting agar fetch dari UI bisa)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Message missing" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Anon Message <onboarding@resend.dev>",
      to: "rizz9579@gmail.com",
      subject: "Pesan Anonim Baru!",
      html: `<p>${message}</p>`
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("RESEND ERROR:", err);
    return res.status(500).json({ message: "Error sending email" });
  }
}
