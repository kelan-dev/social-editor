import css from "./panel.module.css";
import clsx from "clsx";
import { useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import photo_01 from "../assets/photo_01.jpg";
import photo_02 from "../assets/photo_02.jpg";
import photo_03 from "../assets/photo_03.jpg";
import photo_04 from "../assets/photo_04.jpg";
import photo_05 from "../assets/photo_05.jpg";

export default function Panel() {
  const [expanded, setExpanded] = useState(true);

  return (
    <section className={clsx(css.panel, expanded ? css.expanded : "")}>
      <div className={css.heading}>
        {expanded && <h1>Images</h1>}
        <button onClick={() => setExpanded((s) => !s)}>
          {expanded ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
        </button>
      </div>
      {expanded && (
        <div className={css.content}>
          <img src={photo_01} alt="Uploaded image" tabIndex={0} />
          <img src={photo_02} alt="Uploaded image" tabIndex={0} />
          <img src={photo_03} alt="Uploaded image" tabIndex={0} />
          <img src={photo_04} alt="Uploaded image" tabIndex={0} />
          <img src={photo_05} alt="Uploaded image" tabIndex={0} />
          <button>
            <FaPlus />
          </button>
        </div>
      )}
    </section>
  );
}
