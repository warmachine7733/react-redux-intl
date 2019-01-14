import { connect } from "react-redux";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import hi from "react-intl/locale-data/hi";
import gu from "react-intl/locale-data/gu";
import od from "react-intl/locale-data/or";
import ta from "react-intl/locale-data/ta";
import be from "react-intl/locale-data/be";
import te from "react-intl/locale-data/te";
import ka from "react-intl/locale-data/ka";

// This function will map the current redux state to the props for the component that it is "connected" to.
// When the state of the redux store changes, this function will be called, if the props that come out of
// this function are different, then the component that is wrapped is re-rendered.
let mapStateToProps = state => {
  // console.log("format",state)
  addLocaleData(en);
  addLocaleData(hi);
  addLocaleData(gu);
  addLocaleData(ta);
  addLocaleData(od);
  addLocaleData(be);
  addLocaleData(te);
  addLocaleData(ka);
  const { lang, messages } = state.intl;
  return { locale: lang, key: lang, messages };
};

export default connect(mapStateToProps)(IntlProvider);
