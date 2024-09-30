import { useState } from "react"
import { SetRec } from "./setRec";

export function Legördülö(){
let [szemsem,setszemsem]=useState(1);
    
    return <>
        <hr></hr>
        <select name="személy" id="szemely" onChange={(e) => setszemsem(e.target.selectedIndex)}>
            <option defaultValue={1} value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

        </select>
        <SetRec szem={szemsem+1}></SetRec>
    </>
}