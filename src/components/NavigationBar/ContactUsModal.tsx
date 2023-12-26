import React from "react";
import styles from "./navigationBar.module.scss";
import Image from "next/image";
import crossIcon from "@/assets/images/cross-icon.svg";

function ContactUsModal(props: { open: boolean; setOpen: any }) {
  const { open, setOpen } = props;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted");
    setOpen(false);
  };

  const closeModal = (e: any) => {
    console.log("TARGET", e.target.className, e);
    if (
      e.target.className === "modalContainer" ||
      e.target.nodeName === "SECTION"
    ) {
      setOpen(false);
    }
  };

  return (
    <section
      className={styles.modalContainer}
      style={{ visibility: open ? "visible" : "hidden" }}
      onClick={closeModal}
    >
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h3>How can we help?</h3>
          {/* <p>We usually respond in a few hours</p> */}
        </div>
        <span className={styles.closeBtn} onClick={() => setOpen(false)}>
          <Image src={crossIcon} alt="" height={12} width={12} />
        </span>

        <div className={styles.modalContent}>
          <form method="POST" id="form" onSubmit={handleSubmit}>
            <div className={styles.inputField}>
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                name="name"
                id="full_name"
                placeholder="John Doe"
                required
              />
              {/* <div>Please provide your full name.</div> */}
            </div>

            <div className={styles.inputField}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                required
              />
              {/* <div>Please provide your email address.</div>
              <div>Please provide a valid email address.</div> */}
            </div>

            <div className={styles.inputField}>
              <label htmlFor="message">Your Message</label>
              <textarea
                rows={5}
                maxLength={2}
                spellCheck
                name="message"
                id="message"
                placeholder="Your Message"
                required
              />
              {/* <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                Please enter your message.
              </div> */}
            </div>

            <button type="submit" className={styles.modalSendBtn}>
              Send Message
            </button>
          </form>
        </div>

        <style jsx>{`
          .invalid-feedback,
          .empty-feedback {
            display: none;
          }

          .was-validated :placeholder-shown:invalid ~ .empty-feedback {
            display: block;
          }

          .was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
            display: block;
          }

          .is-invalid,
          .was-validated :invalid {
            border-color: #dc3545;
          }

          .is-invalid,
          .was-validated :invalid:focus {
            --tw-ring-color: rgba(220, 53, 69, 0.2);
          }
        `}</style>
      </div>
    </section>
  );
}

export default ContactUsModal;
