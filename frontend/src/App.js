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

export default App;
export {ThemeContext}