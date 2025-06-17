import './contact.css'

export const ContactPage = () => (
<div className="contact-page">
  <h2>Контактирајте Не</h2>
  <p>
    Доколку ви е потребна помош, техничка поддршка или сакате да добиете повеќе информации за нашите услуги, слободно обратете ни се. Нашиот тим е тука за вас и ќе одговори брзо и професионално.
  </p>
  <p>
    Можете да не контактирате преку е-пошта или телефон, а ние ќе ви помогнеме да го решите вашиот проблем или да добиете консултација.
  </p>
  <ul>
    <li>
      <span role="img" aria-label="email">📧</span>{' '}
      <a href="mailto:hightechservice.mk@gmail.com" className="contact-link">
        hightechservice.mk@gmail.com
      </a>
    </li>
    <li>
      <span role="img" aria-label="phone">📞</span>{' '}
      <a href="tel:+38976910836" className="contact-link">
        +389 76 910 836
      </a>
    </li>
    <li>
      <span role="img" aria-label="office">🏢</span> Скопје, Македонија
    </li>
  </ul>
</div>
);
