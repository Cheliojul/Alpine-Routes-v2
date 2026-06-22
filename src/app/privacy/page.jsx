export const metadata = {
  title: 'Privacy Policy | Alpine Routes',
  description: 'How Alpine Routes collects, uses, and protects your personal data.',
};

export default function Privacy() {
  return (
    <div className="page">
      <div className="container page__inner">
        <header className="page__head">
          <p className="page__eyebrow">Legal</p>
          <h1 className="page__title">Privacy policy</h1>
          <p className="page__lead">Last updated: June 2026</p>
        </header>

        <div className="prose">
          <p>
            This policy explains what personal data Alpine Routes collects, why we collect it, and the
            choices you have. It applies to this website and to the transfer bookings made through it.
            This is a template document and should be reviewed by a legal professional before use.
          </p>

          <h2>Information we collect</h2>
          <p>
            When you request a transfer we collect the details you enter in the booking form: your name,
            email address, pickup and destination, date, time, and number of passengers. If you contact
            us by phone or email, we keep the contents of that correspondence.
          </p>
          <p>
            We may also collect basic technical information automatically, such as your browser type and
            general usage of the site, to keep it working and to improve it.
          </p>

          <h2>How we use your information</h2>
          <p>
            We use your booking details to quote, confirm, and provide your transfer, and to contact you
            about it. We use your contact details to answer your enquiries. We do not sell your personal
            data, and we do not use it for advertising.
          </p>

          <h2>Cookies</h2>
          <p>
            This site aims to use only the cookies needed to function. We do not run third-party
            advertising trackers. You can block or delete cookies in your browser settings, though some
            features may stop working if you do.
          </p>

          <h2>Sharing</h2>
          <p>
            We share your details only with the people needed to deliver your transfer, such as the
            assigned chauffeur, and with service providers who help us operate. We may disclose
            information where the law requires it.
          </p>

          <h2>Data retention</h2>
          <p>
            We keep booking records for as long as needed to provide the service and to meet legal and
            accounting obligations, then delete or anonymise them.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask to access, correct, or delete the personal data we hold about you, and you can
            object to certain uses. To make a request, contact us using the details below.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy or your data can be sent to{' '}
            <a href="mailto:email@email.com">email@email.com</a> or by post to 123 Example Street,
            00000 City, Country.
          </p>
        </div>
      </div>
    </div>
  );
}
