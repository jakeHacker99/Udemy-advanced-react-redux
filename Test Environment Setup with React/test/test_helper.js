import jsdom from "jsdom";
import jquery from "jquery";
import TestUtils from "react-addons-test-utils";
import ReactDOM from "react-dom";
// setup env run as broswer in cmd
global.document = jsdom.jsdom(
  "<!doctype html><html><body></body></body></html>"
);
global.window = global.document.defaultView;
const $ = jquery(global.window);

// build renderComponent helper
renderComponent = (ComponentClass) => {
  const componentInstance = TestUtils.renderIntoDocument(<ComponentClass />);
  return $(ReactDOM.findDOMNode(componentInstance));
};

// build helper for simulate

// set up chai-jquery
