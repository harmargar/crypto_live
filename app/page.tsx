import { Item } from '@/components/Item/Item';
import data from './data.json';

export default function Home() {
    return <>
    {
            data.map(( item )=> {
                const { webp64: icon, rank, name, rate, code } = item;
                return <Item key={rank} rank={rank} icon={icon} rate={rate} name={name} code={code}/>
            })
    }
    </>
}
