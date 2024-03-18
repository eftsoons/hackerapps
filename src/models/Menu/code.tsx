import { ReactNode, CSSProperties } from "react"
import { AnimatePresence, motion } from "framer-motion";

import style2 from "./style.module.css"

interface Menu {
    id: string;
    children: ReactNode,
    style?: CSSProperties,
}

const Menu = ({id, children, style} : Menu) => {
    return (
    <AnimatePresence>
        <motion.div 
        style={style}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className={style2.main} key={id}>
            {children}
        </motion.div>
    </AnimatePresence>)
}

export default Menu