import React, { Component } from "react";
import { connect } from "react-redux";
import { changeLanguage } from "./commons/intl/intlActions";
import { compose } from "redux";
import { injectIntl} from "react-intl";

class App extends Component {
  handleLanguageChange = lang => {
    // console.log("fired");
    this.props.changeLang(lang);
  };
  render() {
    const { intl } = this.props;
    return (
      <div>
        <button onClick={() => this.handleLanguageChange("en")}>english</button>
        <button onClick={() => this.handleLanguageChange("hi")}>hindi</button>
        <button onClick={() => this.handleLanguageChange("gu")}>gujrati</button>
        <button onClick={() => this.handleLanguageChange("od")}>odia</button>
        <button onClick={() => this.handleLanguageChange("ta")}>tamil</button>
        <button onClick={() => this.handleLanguageChange("te")}>telegu</button>
        <button onClick={() => this.handleLanguageChange("be")}>bengali</button>
        <button onClick={() => this.handleLanguageChange("ka")}>Kannada</button>
        <h3>{intl.formatMessage({ id: "hello_world" })}</h3>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeLang: lang => dispatch(changeLanguage(lang))
  };
};
const mapStateToProps = state => ({
  languageFullName: state.intl.languageFullName
});
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl
)(App);
