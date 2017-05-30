import * as $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import SWNCharGen from "../SWNCharGen";

// For hot reloading
declare var module: any;
if (module.hot) {
    module.hot.accept();
}

$("div[id^='swnCharGenReact_']").each((index, elem) => {

  const characterId: number = elem.attributes["data-character-id"].nodeValue;

  // AppContainer is required for hot reloading in dev mode. AppContainer is ommitted in build.
  const render = (Component) => {
    ReactDOM.render(
      <AppContainer>
        <Component characterId={characterId} />
      </AppContainer>,
      elem,
    );
  };

  render(SWNCharGen);

});
