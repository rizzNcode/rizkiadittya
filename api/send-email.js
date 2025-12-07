const { Resend } = require("resend");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  try {
    const { message } = req.body; // <-- FIX DI SINI ❗

    if (!message) {
      return res.status(400).json({ message: "Message missing" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Anon Message <onboarding@resend.dev>",
      to: "rizz9579@gmail.com",
      subject: "Pesan Anonim Baru Masuk!",
      html: `
        <h3>Ada pesan anonim baru 👀</h3>
        <p>${message}</p>
        <small>Dikirim pada ${new Date().toLocaleString()}</small>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    return res.status(500).json({ message: "Error sending email" });
  }
};
