

export const Profile = ({fullName="Jordan Belfort",bio="optimiste,audacieux,vis ou l'argent l emporte",profession="developpeur web freelance,entrepreneur,loup de wall street",}) => {
    
    const styleObject={ color:"blue"}
    return(

        <div  className="box1" style={styleObject}>
            
            <h2> MON NOM EST :{fullName}</h2>
                <hr></hr>
            <h2> QUELQUES MOTS SUR MOI: {bio}</h2>
                <hr></hr>
            <h2> MA PROFFESSION EST: {profession}</h2>
        </div>

    )

}



export const Photo = props =>{
     return(     
    <div className="box2">{props.children}</div>

    )
}

export const HandleName =  ({proops="RAOUL"}) => {
    return(
       ( prompt(`l utilisateur de ce profil est: ${proops}`))
    )

}