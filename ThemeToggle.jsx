import React, { Component } from "react";
import sunIcon from "./sunIcon.svg";
import moonIcon from "./moonIcon.svg";

export default class ThemeToggle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      darkMode: false
    };
  }

  componentDidMount() {
    const userPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (userPrefersDarkMode && !this.state.darkMode) {
      this.toggleTheme();
    }
  }

  toggleTheme = () => {
    this.setState({
      darkMode: !this.state.darkMode
    });
    document.body.classList.toggle("dark-mode");
  }

  render() {
    return (
      <div className="toggle-container" onClick={this.toggleTheme}>
        <i>
          (this.state.darkMode) ?
            {sunIcon}
            :
            {moonIcon}
        </i>
      </div>
    )
  }
}