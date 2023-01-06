export default function Button({onClick,text, btnColor}){
    return(
        <div className="button1">
           <button onClick={onClick} style={{backgroundColor: btnColor}}>{text}</button>
        </div>
    )
}