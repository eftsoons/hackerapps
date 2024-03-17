import style from "./style.module.css"

interface Button {
    children: string
    onClick?: () => void
    href?: string
}

// @ts-expect-error
const telegram = window.Telegram.WebApp;

const Button = ({children, onClick, href} : Button) => {
    return (!href ? 
    <div onClick={onClick} className={telegram.platform === "android" ? style.buttonandroid : style.button}>
        {children}
    </div> : 
    <a href={href} target="blank">
    <div onClick={onClick} className={telegram.platform === "android" ? style.buttonandroid : style.button}>
        {children}
    </div>
    </a>
    )
}

export default Button