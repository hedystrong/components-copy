import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from './components/Footer';
import Button from "./components/Button";

import showDate from './components/ShowDate';

const data = {
  tit: {
    welcome: "Welcome to component and props corner",
    title: "React",
    subtitle: "Javascript Library",
  },
  welcome: "Welcome to component and props corner",
  title: "React",
  subtitle: "Javascript Library",
  user: {
    firstname: "John",
    lastname: "Sedrick",
  },
  techskill: ["HTML", "JS", "CSS", "React"],
  date: new Date(),
};


 

function App() {

const greetPeople = ()=>{
  alert("Hello")
}


  return (
    <div className="container">
      <Header header = {data.tit} wel={data.welcome}/>
      <Main userMain = {data.user} main1 = {data.techskill} main2 = {data.date}/>
      <Button text="greetPeople" btnColor="red"  onClick={greetPeople}/>
      <Button text="showDate" btnColor="green" onClick={showDate} />
      <Footer/>
    </div>
    
  );
}


export default App;
