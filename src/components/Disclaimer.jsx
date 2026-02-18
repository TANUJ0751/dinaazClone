// Disclaimer.jsx

// import Nav from './Nav';
import styles from './sty_dis.module.css';

const Disclaimer = () => {
  return (<>
    {/* <DisNav /> */}
    {/* <Nav/> */}

    <div className={styles.container}>

      <div className={styles.header}>
        <p>LEGAL</p>
        <h1>  DISCLAIMER </h1></div>
      <div className={styles.content}>
        <ol className={styles.list}>
          <li>
            <h3 className={styles.point}>1. Heading</h3>
            <div className={styles.text}>
              We value your privacy and are committed to protecting your personal information. <br />
              We collect limited data—such as your name, contact details, and property preferences—to provide personalized real estate solutions and improve our services. <br />
              Your data may be shared with trusted partners (like builders, legal advisors, or financial institutions) only for service-related purposes. We never sell or misuse your information. <br />
              All data is stored securely and used in compliance with applicable privacy laws. By engaging with us, you consent to our data practices.  <br />
              For any queries or to manage your data, please contact us at info@dhswellness.com
            </div>
          </li>
          <li>
            <h3 className={styles.point}>1. Heading</h3>
            <div className={styles.text}>
              We value your privacy and are committed to protecting your personal information. <br />
              We collect limited data—such as your name, contact details, and property preferences—to provide personalized real estate solutions and improve our services. <br />
              Your data may be shared with trusted partners (like builders, legal advisors, or financial institutions) only for service-related purposes. We never sell or misuse your information. <br />
              All data is stored securely and used in compliance with applicable privacy laws. By engaging with us, you consent to our data practices.  <br />
              For any queries or to manage your data, please contact us at info@dhswellness.com
            </div>
          </li>
          <li>
            <h3 className={styles.point}>2. Contact Us</h3>
            <div className={styles.text}>
              For questions, data requests, or concerns related to privacy, contact:info@dhswellness.com
            </div>
          </li>
        </ol>
      </div>
    </div>

  </>

  );
};

export default Disclaimer;
