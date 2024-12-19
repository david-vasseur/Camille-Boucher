import React from 'react'

function Page() {
  return (
    <div className="px-6 pt-20">
        <h1 className="text-[2rem] text-center">Politique de Confidentialité</h1>

        <h2 className="text-[1.5rem] mt-6">1. Informations collectées</h2>
        <p className="pt-4 text-justify">
            Nous collectons plusieurs types d&apos;informations à des fins différentes pour vous fournir et améliorer nos services. Ces informations peuvent inclure :
        </p>
        <ul className="pt-4">
            <li><strong>Informations que vous nous fournissez directement</strong> : nom, adresse e-mail, messages échangés avec nous via des formulaires de contact ou par e-mail.</li>
            <li><strong>Informations collectées automatiquement</strong> : adresse IP, pages visitées, durée de visite, type de navigateur, cookies.</li>
        </ul>

        <h2 className="text-[1.5rem] mt-6">2. Utilisation des données collectées</h2>
        <p className="pt-4 text-justify">
            Les informations collectées sont utilisées dans les buts suivants :
        </p>
        <ul className="pt-4">
            <li>Personnaliser l&apos;expérience utilisateur et améliorer nos services.</li>
            <li>Répondre aux demandes de contact et envoyer des communications.</li>
            <li>Analyser le trafic et les interactions sur le site pour améliorer nos services.</li>
            <li>Respecter nos obligations légales, par exemple pour prévenir la fraude.</li>
        </ul>

        <h2 className="text-[1.5rem] mt-6">3. Partage des données</h2>
        <p className="pt-4 text-justify">
            Nous ne vendons ni ne louons vos informations personnelles. Vos données peuvent être partagées dans les cas suivants :
        </p>
        <ul className="pt-4">
            <li>Avec des prestataires de services tiers pour l&apos;hébergement, l&apos;analyse des données, ou d&apos;autres services essentiels.</li>
            <li>Pour se conformer aux obligations légales ou répondre aux demandes des autorités publiques.</li>
            <li>Dans le cadre d&apos;une fusion ou acquisition de l&apos;entreprise.</li>
        </ul>

        <h2 className="text-[1.5rem] mt-6">4. Conservation des données</h2>
        <p className="pt-4 text-justify">
            Nous conservons vos données personnelles aussi longtemps que nécessaire aux fins pour lesquelles elles ont été collectées, conformément à la loi applicable.
        </p>

        <h2 className="text-[1.5rem] mt-6">5. Sécurité des données</h2>
        <p className="pt-4 text-justify">
            Nous mettons en œuvre des mesures de sécurité pour protéger vos données. Cependant, aucune méthode de transmission de données sur Internet ou de stockage électronique n&apos;est totalement sécurisée.
        </p>

        <h2 className="text-[1.5rem] mt-6">6. Cookies</h2>
        <p className="pt-4 text-justify">
            Nous utilisons des cookies pour améliorer l&apos;expérience utilisateur et analyser le trafic du site. Vous pouvez désactiver les cookies via les paramètres de votre navigateur.
        </p>

        <h2 className="text-[1.5rem] mt-6">7. Vos droits</h2>
        <p className="pt-4 text-justify">
            Conformément aux lois en matière de protection des données, vous avez le droit de :
        </p>
        <ul className="pt-4">
            <li>Accéder à vos données personnelles.</li>
            <li>Corriger des informations incorrectes ou incomplètes.</li>
            <li>Demander la suppression de vos données sous certaines conditions.</li>
            <li>Limiter le traitement de vos données.</li>
            <li>Retirer votre consentement à tout moment.</li>
        </ul>
        <p className="pt-4 text-justify">
            Pour exercer ces droits, veuillez nous contacter à : <a href="mailto:camille.b.35@hotmail.fr">camille.b.35@hotmail.fr</a>.
        </p>

        <h2 className="text-[1.5rem] mt-6">8. Modifications de la politique de confidentialité</h2>
        <p className="pt-4 text-justify">
            Nous nous réservons le droit de modifier cette politique à tout moment. Les modifications seront publiées sur cette page.
        </p>

        <h2 className="text-[1.5rem] mt-6">9. Contact</h2>
        <p className="pt-4 text-justify">
            Pour toute question concernant cette politique, veuillez nous contacter à :
        </p>
        <ul className="pt-4">
            <li>Email : <a href="mailto:camille.b.35@hotmail.fr">camille.b.35@hotmail.fr</a></li>
            <li>Adresse : 58 chemin des grands fonts 30390 Estezargues</li>
        </ul>
    </div>
  )
}

export default Page