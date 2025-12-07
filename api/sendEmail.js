import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  // Supabase sends raw body, so parse it manually
  const rawBody = await req.text();
  const { message } = JSON.parse(rawBody);

  if (!message) {
    return res.status(400).json({ message: "Message missing" });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Anon Message <no-reply@yourdomain.com>",
      to: "rizz9575@gmail.com",
      subject: "Pesan Anonim Baru Masuk!",
      html: `
        <h3>Ada pesan anonim baru 👀</h3>
        <p>${message}</p>
        <small>Dikirim pada ${new Date().toLocaleString()}</small>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error sending email", err });
  }
}
