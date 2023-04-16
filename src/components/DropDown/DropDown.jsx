import React from 'react';

export class DropDown extends React.Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  render() {
    return (
      <div>
        <div>
          <button type="button" onClick={this.toggle}>
            {this.state.visible ? 'Hide' : 'Show'}
          </button>
        </div>
        {this.state.visible && <div>Menu</div>}
      </div>
    );
  }
}
