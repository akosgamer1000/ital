interface props{
    személy:number
    color:string
}


export function Recept(props:props){
    
    if(props.személy==2){

        return <>
            <p style={{color:props.color}}>Forraljon fel 2 csésze vizet.</p>
            <p style={{color:props.color}}>Adjunk hozzá 2 kanál (tetszőleges) teát és 1 kanál fűszert.</p>
            <p style={{color:props.color}}>  Adjunk hozzá 1 csésze tejet, hogy felforraljuk, és ízlés szerint cukrot.</p>
           
        </>
    }
    else if(props.személy>2)
    {
        return <>
            <p style={{color:props.color}}> Forraljon fel 4 csésze vizet.</p>
            <p style={{color:props.color}}>  Adjunk hozzá 4 kanál (tetszőleges) teát és 2 kanál fűszert.</p>
            <p style={{color:props.color}}> Adjunk hozzá 2 csésze tejet forralni és ízlés szerint cukrot.</p>
        </>
        
       
    
       
    }
    else{
        return <><p style={{color:props.color}}>csak kettö före van</p></>
    }
    

}