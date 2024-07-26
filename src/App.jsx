import React from 'react';
import Compteur from './Compteur';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  };

onClickAdd = () => {
this.setState({count: this.state.count + 1});
};

onClickSubstract = () => {
  this.setState({count: this.state.count - 1});
};


render() {
  return (
    <div>
<h1>Gestion du Compteur</h1>
<Compteur
count={this.state.count}
onClickAdd={this.onClickAdd}
onClickSubstract={this.onClickSubstract}
/>
    </div>
  );
}
}

export default App;
