import style from './Item.module.css'
import { Props } from './Item.props'


const Item = ({ rank, icon, rate, name, code }: Props) => {
    return (
        <div className={style.container}>
            {/* <div className={style.rank}>
                <h1>{rank}</h1>
            </div> */}
            <div className={style.icon}>
                <img src={icon}/>
            </div>
            <div className={style.name}>
                <h1>{name}</h1>
                <p>{code}</p>
            </div>
            <div className={style.rate}>
                <h1>{Math.floor(rate)}$</h1>
            </div>
        </div>
    )
}

export { Item }

