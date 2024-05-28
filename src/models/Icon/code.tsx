import { ReactNode, Fragment} from 'react';
import style from './style.module.css';

// @ts-expect-error
const telegram = window.Telegram.WebApp;

interface Icon {
    id?: string;
    children: ReactNode;
    active?: string;
    setactive?: Function
    noanim?: Boolean
}

const Icon = ({ id, children, active, setactive, noanim }: Icon) => {
  return (
    <Fragment>
        {setactive ? 
        <div id={noanim && style.noanim} onClick={() => {setactive(id); telegram.BackButton.hide()}} className={id == active ? style.icon2 : style.icon}>
            {children}
        </div> 
    : 
        <div id={noanim && style.noanim} className={style.icon}>
            {children}
        </div>}
    </Fragment>
    )
};

export default Icon;