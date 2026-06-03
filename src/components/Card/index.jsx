import style from "./card.module.css"

const Card = ({children}) =>{
    return (
        <div className={style.card}>{children}</div>
    )
}

export const CardHeader = ({children}) => {
    return (
        <div className={style.header}>{children}</div>
    )
}
export const CardBody = ({children}) => {
    return (
        <div className={style.body}>{children}</div>
    )
}

Card.Header = CardHeader
Card.Body = CardBody

export default Card