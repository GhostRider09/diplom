import { FooterMenu } from "../components/Menu/FooterMenu";

export const Footer = () => {
  const phone = import.meta.env.VITE_PHONE;
  const email = import.meta.env.VITE_EMAIL;

  return (
    <footer className="container bg-light footer">
      <div className="row">
        <div className="col">
          <section>
            <h5>Информация</h5>
            <FooterMenu />
          </section>
        </div>
        <div className="col">
          <section>
            <h5>Принимаем к оплате:</h5>
            <div className="footer-pay">
              <div className="footer-pay-systems footer-pay-systems-paypal"></div>
              <div className="footer-pay-systems footer-pay-systems-master-card"></div>
              <div className="footer-pay-systems footer-pay-systems-visa"></div>
              <div className="footer-pay-systems footer-pay-systems-yandex"></div>
              <div className="footer-pay-systems footer-pay-systems-webmoney"></div>
              <div className="footer-pay-systems footer-pay-systems-qiwi"></div>
            </div>
          </section>
          <section>
            <div className="footer-copyright">2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.
              Все права защищены.<br/>Доставка по всей России!
            </div>
          </section>
        </div>
        <div className="col text-right">
          <section className="footer-contacts">
            <h5>Контакты:</h5>
            <a className="footer-contacts-phone" href={`tel:${phone}`}>{phone}</a>
            <span className="footer-contacts-working-hours">Ежедневно: с 09-00 до 21-00</span>
            <a className="footer-contacts-email" href={`mailto:${email}`}>{email}</a>
            <div className="footer-social-links">
              <div className="footer-social-link footer-social-link-twitter"></div>
              <div className="footer-social-link footer-social-link-vk"></div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  )
}