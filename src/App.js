import AboutMe from "./AboutMe";
import Contact from './Contact';
import MyWork from './MyWork';
import Home from "./Home";
import Navbar from "./Navbar";
// import logo from './profilePic.png'



function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <AboutMe />
      <MyWork />
      <Contact />
      <img src='./profilePic.png' alt=''></img>
    </div>
  );
}

export default App;
