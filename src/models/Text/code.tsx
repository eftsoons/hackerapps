
import style from "./style.module.css"

type Text = {
  children: string;
}

const Text = ({ children } : Text) => {
  return <span className={style.text}>{children}</span>
};


export default Text