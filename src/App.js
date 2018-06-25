import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";


class App extends React.Component{
state = {clicked:[],
score:0, 
status:"click an image"
}


imageClick=(evt) => {
  const name = evt.target.dataset.name;
if (this.state.clicked.includes(name)){
  

  this.setState({score:0, clicked:[], status:"Game Over"});

}
else if (this.state.score + 1 === friends.length){
  this.setState({score:this.state.score +1, status:"You win"})
}


else {this.state.clicked.push(name)
  this.setState({score:this.state.score + 1, status:"Keep Clicking Image"})

}

};
render () {
  return (
  <Wrapper>
  <h1>{this.state.score} / {this.state.status}</h1>
{
friends.map(friend => (
  <FriendCard name={friend.name} image={friend.image} handler={this.imageClick}/>
))


}

  </Wrapper>
  )
}
};

export default App;
