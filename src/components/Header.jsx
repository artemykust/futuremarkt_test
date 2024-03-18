import styles from "./Header.module.scss";
import logo from "../assets/logo.svg";
import phone from "../assets/phone.svg";
import menu from "../assets/menu.svg";

export default function Header() {
  return (
    <header>
      <img className={styles.logo} src={logo} alt="Alex Shevtsov Logo" />
      <nav className={styles.navigation}>
        <a href="#" className="nav_item">
          Обо мне
        </a>
        <a href="#" className="nav_item">
          Наставничество
        </a>
        <a href="#" className="nav_item">
          Мероприятия
        </a>
        <a href="#" className="nav_item">
          Кейсы
        </a>
        <a href="#" className="nav_item">
          Отзывы
        </a>
        <a href="#" className="nav_item">
          Контакты
        </a>
      </nav>
      <a href="tel:83451233445" className={styles.telephone}>
        <img className={styles.menu} src={menu} alt="Phone" />
        <img src={phone} alt="Phone" />
        <span>8-345-123-34-45</span>
      </a>
    </header>
  );
}
