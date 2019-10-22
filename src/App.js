import React, {Component} from 'react';
import Post from './post';
import './App.css';
import 

class App extends Component {

  state = {
      posts: []
    }

  componentDidMount() {
    var response = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(data => {
      this.setState({posts: data});
    })
  }
  render() {
    const { posts } = this.state;
    
    return (
    <div className="App">

      {posts.map( function (dados) {
      return <Post key={dados.id} title={dados.title} body={dados.body}/>
      })}
    </div>
  )  
  }

  
}

export default App;
