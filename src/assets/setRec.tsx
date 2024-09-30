
import { Recept } from "./Recept";
interface probs{
szem: number
}
export function SetRec(probs:probs){
   
    return<>
        <Recept személy={probs.szem} color="red"></Recept>
    </>
    

}