import {ReactNode, Children, Fragment, cloneElement, ReactElement} from "react"

import style from './style.module.css';

interface Bottom {
  children: ReactNode;
  activemenu: string;
  setactive: Function
}

const Bottom = ({ children, activemenu, setactive }: Bottom) => {
    return (
        <div className={style.icons}>
        {Children.toArray(children).map((child, index) => (
            <Fragment key={index}>
            {index != 0 && <div className={style.separator} />}
            <div className={style.icon}>{cloneElement(child as ReactElement, {active: activemenu, setactive: setactive})}</div>
            </Fragment>
        ))}
        </div>
    );
};

export default Bottom;