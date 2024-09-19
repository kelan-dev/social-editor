import css from "./editor.module.css";
import bg_image from "../assets/bg_image.jpg";
import fg_image from "../assets/fg_image.jpg";
import { FaAngleRight } from "react-icons/fa";
import { FaCropAlt } from "react-icons/fa";
import { FaObjectGroup } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function Editor() {
  return (
    <main className={css.editor}>
      <div className={css.infobar}>
        <section className={css.breadcrumbs}>
          <a href="#">Facebook posts</a>
          <FaAngleRight />
          <span>Happy-hour-friday</span>
        </section>
        <button className={css.publish}>Publish</button>
      </div>
      <div className={css.artboard}>
        <section className={css.canvas}>
          <img className={css.bgImage} src={bg_image} alt="Background image" />
          <img className={css.fgImage} src={fg_image} alt="Foreground image" />
          <div className={css.circle}></div>
          <div className={css.circle}></div>
          <div className={css.circle}></div>
          <div className={css.circle}></div>
        </section>
        <section className={css.tools}>
          <button className={css.active}>
            <FaCropAlt />
          </button>
          <button>
            <FaObjectGroup />
          </button>
          <button>
            <FaPen />
          </button>
          <button>
            <FaTrash />
          </button>
        </section>
      </div>
    </main>
  );
}
