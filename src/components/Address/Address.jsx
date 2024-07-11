import React from "react";
import styles from "./Address.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";

const Address = () => {
  return (
    <div className={styles.adress}>
      <h2>Contacts</h2>
      <div className={styles.adress_list}>
        <section className={styles.adress_list__item}>
          <FontAwesomeIcon icon={faPhone} className={styles.adress_icon} />
          <a href="tel://+500342242" className={styles.adress_list__phone}>
            500 342 242
          </a>
        </section>

        <section className={styles.adress_list__item}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.adress_icon} />
          <a
            href="mailto:office@kamsolutions.pl"
            className={styles.adress_list__email}
          >
            office@kamsolutions.pl
          </a>
        </section>

        <section className={styles.adress_list__item}>
          <FontAwesomeIcon icon={faTwitter} className={styles.adress_icon} />
          <div className={styles.adress_item_subtitle}>
            <p className={styles.adress_list__twitter_title}>Twitter</p>

            <a
              href="https://twitter.com/wordpress"
              id={styles.adress_list__subtitle}
            >
              https://twitter.com/wordpress
            </a>
          </div>
        </section>

        <section className={styles.adress_list__item}>
          <FontAwesomeIcon icon={faFacebook} className={styles.adress_icon} />
          <div className={styles.adress_item_subtitle}>
            <p className={styles.adress_list__facebook_title}>Facebook</p>
            <a
              href="https://www.facebook.com/facebook"
              id={styles.adress_list__subtitle}
            >
              https://www.facebook.com/facebook
            </a>
          </div>
        </section>

        <section className={styles.adress_list__item}>
          <FontAwesomeIcon icon={faSkype} className={styles.adress_icon} />
          <div className={styles.adress_item_subtitle}>
            <p className={styles.adress_list__skype_title}>Skype</p>
            <a href="skype:kamsolutions.pl" id={styles.adress_list__subtitle}>
              kamsolutions.pl
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Address;
