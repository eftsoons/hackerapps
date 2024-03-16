import { ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion";

import style from "./style.module.css"

interface Menu {
    id: string;
    children: ReactNode
}

const Menu = ({id, children} : Menu) => {
    return (
    <AnimatePresence>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className={style.main} key={id}>{children}</motion.div>
    </AnimatePresence>)
}

export default Menu