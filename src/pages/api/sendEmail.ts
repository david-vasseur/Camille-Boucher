import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nom, prénom, téléphone, email, soin, message, disponibilités } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: 'david.vasseur@oclock.school', 
      subject: 'Nouvelle demande de rendez vous',
      text: `
        Voici les détails du formulaire :

        Nom: ${nom}
        Prénom: ${prénom}
        Téléphone: ${téléphone}
        E-mail: ${email}
        Type de soin: ${soin}
        Message: ${message}
        Disponibilités: ${disponibilités}
      `,
      html: `<h1 style="color: red">Nom: ${nom}</h1><p>Prénom: ${prénom}</p><p>Message: ${message}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'E-mail envoyé avec succès' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail', error);
      res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'e-mail' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
