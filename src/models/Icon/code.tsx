import { ReactNode, Fragment} from 'react';
import style from './style.module.css';

interface Icon {
    id?: string;
    children: ReactNode;
    active?: string
    setactive?: Function
}

const Icon = ({ id, children, active, setactive }: Icon) => {
  return (
    <Fragment>
        {setactive ? 
        <div onClick={() => setactive(id)} className={id == active ? style.icon2 : style.icon}>
            {children}
        </div> 
    : 
        <div className={style.icon}>
            {children}
        </div>}
    </Fragment>
    )
};

export default Icon;