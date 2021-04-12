import {Component} from 'react'
import './App.css';
import Logo from './import/logo.svg';
import ImageCard from './ImageCard';
import Graysearch from './import/Graysearch.svg'

class App extends Component{
  state = {
    num : 0
  }
  render(){
    const onMouseOverInImageCard = e =>{
      console.log(e)
      let Darker = document.getElementsByClassName("DarkerZero")
      let ContentOfCardImage = document.getElementsByClassName("ContentOfCardImage");
  
    }
    return(
      <>
       <header className = "header">
        <div className = "LogoAndSearchBar">
          <img alt = "PrincipaleLogo" src = {Logo} />
          <div className = "ContainerOfInput">
            <input placeholder= "Search by name" className = "SearhBar input" />
            <img src={Graysearch} alt = "gray" />
          </div>
        </div>
        <div className = "PhotoAdder">
            <button className = "PhotoAdderButton">Add a photo</button>
        </div>
      </header>
      <section className = "FirstSection">
        <div className = "container AllImageCards">
          <ImageCard onMouseOverInImageCard = {onMouseOverInImageCard} />
          <ImageCard onMouseOverInImageCard = {onMouseOverInImageCard} />
          <ImageCard onMouseOverInImageCard = {onMouseOverInImageCard} />
          <ImageCard onMouseOverInImageCard = {onMouseOverInImageCard} />
          <ImageCard onMouseOverInImageCard = {onMouseOverInImageCard} />
        </div>
      </section>
      </>
    )
  }
}

export default App;
