import React from "react";
import { connect } from 'react-redux';

import { FormattedMessage } from "react-intl";

class Recover extends React.Component<any,any> {
  render() {
    return (
      <h1><FormattedMessage id="recover.title" defaultMessage="Recover" /></h1>
    );
  }
}

const mapStateToProps = (state: any) => ({
  app: state.App,
});

export default connect(mapStateToProps)(Recover);