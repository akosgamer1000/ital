import { useState } from "react"
import { Recept } from "./Recept"

interface colorpalet{
    textcolor:string,
    backgroundcolor:string
}



export function ColorTable(){
    let litsa:colorpalet[] = [
        {textcolor:"red",backgroundcolor:"green"},
        {textcolor:"blue",backgroundcolor:"yellow"},
    ]
    let [textcolor,settextcolor]=useState("red")
    let [backgroundcolor,setbackgroundcolor]=useState("green")
    
    return <>
        <table>
            <thead>
                <tr>
                    <th>Text Color</th>
                    <th>backgroundcolor</th>  
                </tr>
            </thead>
            <tbody> 
                {litsa.map(element=><tr>
                    <td onClick={()=>{settextcolor(element.textcolor)}} style={{backgroundColor:element.textcolor}}>{element.textcolor}</td>
                    <td onClick={()=>{setbackgroundcolor(element.backgroundcolor)}} style={{backgroundColor:element.backgroundcolor}}>{element.backgroundcolor}</td>
                    </tr>)}
            </tbody>
        </table>
        <hr></hr>
        <Recept color={textcolor} személy={2}></Recept>
    </>
}