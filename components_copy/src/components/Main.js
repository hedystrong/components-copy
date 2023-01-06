export default function Main ({userMain,main2,main1}){
   
    return(
        <div>
            <p>{userMain.firstname + userMain.lastname}</p>
            <p>{`${main2.getFullYear()} - ${main2.getMonth()+"1"} - ${"0"+main2.getDay()}`}</p>
            <h2>Tech stack:</h2>
            <ul>
                {
                    main1.map((e) => (<li>{e}</li>))
                }
            </ul>
            <img src="https://www.w3schools.com/howto/img_avatar2.png"></img>
            <h2>{userMain.firstname + userMain.lastname}</h2>
        </div>
        
    );
};