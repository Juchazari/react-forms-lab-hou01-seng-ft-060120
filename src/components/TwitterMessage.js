import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxChars: props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      maxChars: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <p>Characters left: {this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
