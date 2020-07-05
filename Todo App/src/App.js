import React from 'react';
import logo from "./lgo.png"
import './App.css';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state ={
      newItem: "",
      list : []
    }
  }

  addItem(todovalue){
    if (todovalue !== "") {
      const newItem = {
        id: Date.now(),
        value: todovalue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem : ""
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({list:updatedlist});
  }

  updateInput(input){
    this.setState({
      newItem: input
    });
  }
  
  render(){
    return (
      <div>
        <img src={logo} className="logo" height="150px" width="150px" alt="Prayatna Logo" />
        <h1 className="App-title">Half-Tone ToDo App</h1>
      <div className="container">
          <b>Just Add Your Work With Half-Tone </b> <br />
        <br />
        <input style={{padding: '10px'}}
                type="text" 
                classname="App-input-text"
                placeholder="Write Something....." 
                  required
                  value={this.state.newItem}
                  onChange={e =>this.updateInput(e.target.value)}

                />
                
                <button 
                className="add-btn"
                onClick={() => this.addItem(this.state.newItem)}
                disabled={!this.state.newItem.length}
                style={{marginLeft: '25px'}}
                >
                  ADD TODO 
                </button>
                <div className="App-list">
                  <ul>
                  {this.state.list.map(item => {
                    return (
                      <li key={item.id}>
                        <input type="checkbox" 
                          name="idDone"
                          checked={item.isDone}
                          onChange={() => {}}
                        />

                        {item.value}
                        <button className="btn"
                        onClick={() => this.deleteItem(item.id)}>
                                Delete
                        </button>
                      </li>
                    );
                  })}
                    <li>
                    <input type="checkbox" />
                <b style={{fontSize: '20px'}}>Work With Full Energy!</b>
                      <button className="btn" style={{marginLeft: '25px'}}>Delete</button>
                    </li>
                  </ul>
                </div>
      </div>
      </div>
    )
  }
}


export default App;


