/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import axios from 'axios' 
import { Component } from 'react';

//hjhj
const api= axios.create({
  baseURL:'http://localhost:5000/persons',
  headers:{
    'X-auth-key':"token123"
  }
})

class App extends Component {  

  state = {
    persons: [],
  }
  constructor() { 
    super();
    this.getPersons();
    }
    getPersons = async ( ) => {
     try{
      let data = await api.get('/?',{
        params:{
          _limit:3,
          _start:0
      // let data = await axios ({
      //   method:'get',
      //   url:'http://localhost:3000/persons' 
        }
     }).then(({ data })=> data);
      this.setState({persons:data})
     }catch(err){
      console.log(err)
     }
    }
  
  
  createPerson = async ( ) => {
let res = await api.post('/', {name:"new person","age":21,"email":"Gilberto_Windler28@yahoo.com"})
 .catch(err=> console.log(err))
console.log(res)
 this.getPersons();
}
deletePerson = async(id) => {
  let data = await api
  .delete(`/${id}`)
  .catch(err=>console.log(err))
  this.getPersons()
}

updatePerson = async (id, val) => {
  let data = await api.put(`/${id}`,{name:val})
  this.getPersons()
}

render(){
 return (
    <div className="App">
      <header className="App-header">
        <button onClick={this.createPerson}>createPerson</button>
        {this.state.persons.map(person =><><h2 key={person.id} onClick={()=>this.updatePerson(person.id,`${person.name}a`)}>{person.name}</h2><button onClick={()=>this.deletePerson(person.id)}>x</button></>)}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); 
}
}


export default App;