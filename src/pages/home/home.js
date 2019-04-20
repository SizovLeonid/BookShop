import Header from '../../components/header/header';
import HomeSlider from '../../components/slider/slider';
import Menu from '../../components/menu/menu';
import React from 'react';
import './home.less';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.ClickMenu = this.ClickMenu.bind(this);
  }

  state = {
    menuFlag: false
  }

  ClickMenu() {
    this.setState({ menuFlag: !this.state.menuFlag });
  }

  render() {
    return (
      <div>
        <div className={`${this.state.menuFlag === true ? 'closeScreen' : ''}`} onClick={() => this.setState({ menuFlag: !this.state.menuFlag })}/>
        <Header menuClick={this.ClickMenu}/>
        <Menu stateMenu={this.state.menuFlag}/>
        <HomeSlider />
      </div>
    );
  }
}

export default Home;
