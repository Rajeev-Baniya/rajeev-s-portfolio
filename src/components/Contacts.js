import React from "react";

const Contacts = () => {
  return (
    <section className="contactss" id="contacts">
      <div className="contacts-content">
        <div className="container">
          <h2 className="myHeading edu">Contact Me</h2>
          <br />
          <p className="description">
            <i class="fas fa-envelope-open-text fa-2x"></i>{" "}
            rajeevbaniya11@gmail.com
          </p>
          <p className="description">
            <i class="fas fa-phone-volume fa-2x"></i> +9779805832174
          </p>
          <p className="description">
            <i class="far fa-address-card fa-2x"></i> Batulechaur, Pokhara-16,
            Kaski, Nepal
          </p>
          <br />
          <div className="link-icons">
            <a href="https://www.instagram.com/rajeev_baniya/" target="_blank">
              <i class="fab fa-instagram fa-3x"></i>
            </a>
            <a href="https://github.com/Rajeev-Baniya" target="_blank">
              <i class="fab fa-github fa-3x"></i>
            </a>
            <a href="https://www.facebook.com/rajeev.baniya.11" target="_blank">
              <i class="fab fa-facebook fa-3x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rajeev-baniya-72aa42217/"
              target="_blank"
            >
              <i class="fab fa-linkedin fa-3x"></i>
            </a>
          </div>
          <br />
          <hr />
          <br />
        </div>
        <a href="#home" title="go to the top">
          <i class="fas fa-angle-double-up fa-5x fab"></i>
        </a>
        <div>
          <p className="developed">Developed by Rajeev Baniya</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
