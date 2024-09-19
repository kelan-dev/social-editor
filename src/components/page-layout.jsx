import css from "./page-layout.module.css";
import Editor from "./editor";
import Panel from "./panel";
import Sidebar from "./sidebar";

export default function PageLayout() {
  return (
    <div className={css.pageLayout}>
      <Sidebar />
      <Panel />
      <Editor />
    </div>
  );
}
