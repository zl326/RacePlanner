import React from 'react';

class StartupScripts extends React.Component {
  render() {
    return (
      <div>
        <script type="text/javascript" src="../node_modules/jquery/dist/jquery.min.js"></script>

        <script type="text/javascript" src="../node_modules/golden-layout/dist/goldenlayout.min.js"></script>
        <link type="text/css" rel="stylesheet" href="../node_modules/golden-layout/src/css/goldenlayout-base.css" />
      </div>
    );
  }
}

export default StartupScripts
