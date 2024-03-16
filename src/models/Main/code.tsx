import { ReactNode, Children, isValidElement } from "react"

interface Main {
    activemenu: string
    children: ReactNode
}

const Main = ({activemenu, children} : Main) => {
    return (Children.toArray(children).map((child) => {
        if (isValidElement(child) && child.props.id === activemenu) {
            return child;
        }
        return null
    }))
}

export default Main