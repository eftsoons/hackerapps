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
    <button onClick={onClick} className={telegram.platform === "android" ? style.buttonandroid : style.button}>
        <span style={{userSelect: "none"}}>{children}</span>
    </button> : 
    <a href={href} target="blank">
    <button onClick={onClick} className={telegram.platform === "android" ? style.buttonandroid : style.button}>
        <span style={{userSelect: "none"}}>{children}</span>
    </button>
    </a>
    )
}

export default Button