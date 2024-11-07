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
      from: `"www.daikoomyo.fr" <${process.env.EMAIL_USER}>`, 
      to: 'camille.b.35@hotmail.fr', 
      subject: 'Daikoomyo - Nouvelle demande de rendez vous',
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
      html: `<h1 style="color: pink">Nouvelle demande de rendez-vous</h1>
                <h2>${prénom} ${nom} a fait une demande de rendez-vous pour un soin ${soin}</h2>
                <h3>Vous pouvez la joindre via:</h3>
                <ul>
                    <li>téléphone: ${téléphone}</li>
                    <li>email: ${email}</li>
                </ul>
                <h2>Message:</h2>
                <p>${message}</p>
                <h2>Ses disponibilités:</h2>
                <p>${disponibilités}</p>
                `,
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
