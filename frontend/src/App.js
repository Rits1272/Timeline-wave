import React from "react";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
const ThemeContext = React.createContext({background:"black",color:"white"})

const dark={backgroundColor:"black",color:"white",name:"dark"}
const light={backgroundColor:"white",color:"black",name:"light"}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      theme:dark
    }
  }
  changeColorMode=()=>{
    this.setState(state=>({theme:state.theme===light?dark:light}));
  }
  render(){
    let {theme}=this.state;
    return (
      <ThemeContext.Provider value={theme}>
        <Router>
          <NavBar changeMode={this.changeColorMode}/>
            <Route path="/about"><About /></Route>
            <Route path="/users"><Users /></Route>
            <Route path="/hello"><Hello /></Route>
            <Route exact path="/"><Home /></Route>
          </Router>
      </ThemeContext.Provider>
    );
  }
}


function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Timeline-wave</h1>
      </header>
    </div>

  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Hello() {
  return(
    <div class="dropdown">
      <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        <a href="login-page/index.html">Login</a>
        <a href="login-page/register.html">Register</a>
        <a href="login-page/forgot.html">Forgot</a>
      </div>
    </div>
  );
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
//   document.getElementById("myFunction()").classList.toggle("show");
//
//
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
//   return <h2>Hello</h2>;
// }


export default App;
export {ThemeContext}
