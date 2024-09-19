import css from "./header.module.css";
import logo from "../assets/logo.svg";
import profile from "../assets/profile.jpg";
import { FaCrown } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

export default function Header() {
  return (
    <header className={css.header}>
      <img className={css.logo} src={logo} alt="Social Editor logo" />
      <button>File</button>
      <button>View</button>
      <button>New</button>
      <button>
        <FaCrown />
      </button>
      <button>
        <FaBell />
      </button>
      <button className={css.profile}>
        <img src={profile} alt="Profile picture" />
        <span>James O.</span>
      </button>
    </header>
  );
}
