//class based components
//never use this because every company is migrating to the functional based components

import { Component } from "react";

class ClassBasedComponent extends Component {
  //defining the state
  state = {
    showText: false,
    changeColor: false,
    count: 0,
    changeCountStyle : false
  };

  handleClick = () => {
    console.log("button clicked");

    //below one is not recommended method to toggle the state=> because this will not re-render the component
    // this.state.showText = !this.state.showText

    const { changeColor } = this.state;

    this.setState({
      showText: !this.state.showText,
      changeColor: !changeColor,
    });
  };

  handleCount=()=>{
    this.setState({
      ...this.state,
      count : this.state.count+1
    })
  }

  //componentDidMount
  //componentDidUpdate
  //componentWillUpdate

  componentDidMount() {
    console.log("This is called first time on page load");
    //anything inside this will get done when the component gets rendered for the first time
  }

  componentDidUpdate(prevProps, prevState) {
    //this will get called whenever the props and state changes
    console.log(prevProps, prevState);
    if(prevState && prevState.count !== this.state.count && this.state.count ===10){
      this.setState({
        ...this.state,
        changeCountStyle : true
      })
    }
  }

  componentWillUnmount(){
    console.log('component is getting unmounted')
  }

  render() {
    const { showText, changeColor, count ,changeCountStyle} = this.state;
    console.log(this.state.showText);
    console.log(changeCountStyle)
    //this will going to render the jsx and you'll be seeing the jsx in your browser
    return (
      <div>
        {showText ? <h4>Class based components</h4> : null}
        <button
          onClick={this.handleClick}
          style={{ color: changeColor ? "red" : "blue" }}
        >
          Toggle text
        </button>
        <button onClick={this.handleCount}>Increase count</button>
        <div style={{color : changeCountStyle ? "red" : "blue" , fontSize:changeCountStyle?"40px" : "20px"}}>Count is : {count}</div>
      </div>
    );
  }
}

export default ClassBasedComponent;
