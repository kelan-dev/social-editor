import css from "./sidebar.module.css";
import { FaLayerGroup } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { FaFont } from "react-icons/fa";
import { FaShapes } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className={css.sidebar}>
      <section className={css.menu}>
        <button>
          <FaLayerGroup />
          <span>Templates</span>
        </button>
        <button className={css.active}>
          <FaImage />
          <span>Images</span>
        </button>
        <button>
          <FaFont />
          <span>Text/Font</span>
        </button>
        <button>
          <FaShapes />
          <span>Shapes</span>
        </button>
      </section>

      <footer className={css.footer}>
        <small>&copy; 2024 SocialEditor. All rights reserved.</small>
      </footer>
    </div>
  );
}
