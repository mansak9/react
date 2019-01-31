import React from "react";

class ControlledForm extends React.Component {
  state = {
    value: ""
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert("입력값을 서버로 전송합니다:" + this.state.value);
    event.preventDefault();
  }

  handleInputChange = ({ target }) => {
    this.setState({
      value: target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name :
          <input type="text" onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ControlledForm;
