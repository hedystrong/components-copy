import App from "../App";

export default function Header ({header}) {

    return(
        <div>
            <h2>{header.welcome}</h2>
            <h3>{header.title}</h3>
            <h3>{header.subtitle}</h3>
        </div>
        
    );
};

