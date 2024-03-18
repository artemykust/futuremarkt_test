import styles from "./Sidepanel.module.scss";
import logo from "../../assets/logo.svg";

import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Sidepanel({ onClick }) {
  const [submit, setSubmit] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    confirm: false,
  });

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(nextFormState);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    localStorage.setItem("form", JSON.stringify(form));
    setSubmit(true);
  };

  const isButtonActive =
    form.name.trim() !== "" && form.phone.trim() !== "" && form.confirm;

  return (
    <>
      <div className={styles.sidepanel_smooth} onClick={onClick}></div>
      <div className={styles.sidepanel}>
        <svg
          className={styles.exit_button}
          onClick={onClick}
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.70711"
            y1="1.69865"
            x2="32.1127"
            y2="32.1042"
            stroke="white"
            strokeOpacity="0.8"
            strokeWidth="2"
          />
          <line
            x1="1.29289"
            y1="31.6982"
            x2="31.6985"
            y2="1.29258"
            stroke="white"
            strokeOpacity="0.8"
            strokeWidth="2"
          />
        </svg>
        {submit ? (
          <div className={styles.submit_message}>
            <p>Спасибо за заявку</p>
            <p>Я обязательно свяжусь с вами в ближайшее время.</p>
            <img className={styles.logo} src={logo} alt="Alex Shevtsov Logo" />
          </div>
        ) : (
          <>
            <p className={styles.panel_title}>Закажите обратный звонок</p>
            <form className={styles.form} onSubmit={onSubmitForm}>
              <div className={styles.formGroup}>
                <input
                  className={styles.formField}
                  type="text"
                  aria-label="Name field"
                  placeholder="ИМЯ"
                  name="name"
                  value={form.name}
                  onChange={onUpdateField}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  className={styles.formField}
                  type="number"
                  aria-label="Phone field"
                  placeholder="ТЕЛЕФОН"
                  name="phone"
                  value={form.phone}
                  onChange={onUpdateField}
                />
              </div>
              <label className={styles.formCheckbox}>
                <input
                  type="checkbox"
                  name="confirm"
                  value={true}
                  onChange={onUpdateField}
                />
                <span className={styles.checkboxLabel}>
                  Согласен на сохранение и обработку <br /> персональных данных
                </span>
              </label>
              <button disabled={!isButtonActive} className={styles.btn_call}>
                <div className={styles.btn_text}>
                  <span>Заказать обратный звонок</span>
                </div>
                <div className={styles.btn_icon}>
                  <svg
                    // width="22"
                    // height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 4.29346V20.952H4.37326M20.9618 21L1 1"
                      stroke="#FFF"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}
