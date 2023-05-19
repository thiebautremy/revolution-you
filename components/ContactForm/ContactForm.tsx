import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.scss";
const emailJSPublicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;
const emailJSPIdTemplate = process.env.NEXT_PUBLIC_EMAIL_ID_TEMPLATE as string;
const ContactForm = () => {
  const form = useRef(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageModal, setMessageModal] = useState("");
  const [isVisibleModal, setIsVisibleModal] = useState(true);
  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    form.current &&
      emailjs
        .sendForm(
          "service_5h5mqn9",
          emailJSPIdTemplate,
          form.current,
          emailJSPublicKey
        )
        .then(
          (res) => {
            if (res.status === 200) {
              setMessageModal("Message correctement envoyé");
              setIsVisibleModal(true);
              setMessage("");
              setEmail("");
            }
          },
          (err) => {
            setMessageModal("Problème lors de l'envoi du message");
            setIsVisibleModal(true);
          }
        );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className={styles.inputAndLabel}>
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          placeholder="Votre Email..."
        />
      </div>
      <div className={styles.inputAndLabel}>
        <label>Message</label>
        <textarea
          name="message"
          className={styles.input}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Votre message..."
        />
      </div>
      <input type="submit" value="Envoyer" className={styles.submitBtn} />
    </form>
  );
};
export default ContactForm;
