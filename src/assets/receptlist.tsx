import { Recept } from "./Recept"

export function Receptlista(){
    let list=[1,2,3,4,5]
    let colorlist=["red", "green", "yellow", "blue", "magenta"]
    return <>
        <ul>
            {
                list.map(element=><li><Recept color={colorlist[  Math.floor(Math.random() * colorlist.length)]} személy={element}></Recept></li>)

            }
        </ul>
    </>
}