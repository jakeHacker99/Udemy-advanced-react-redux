import jsdom from "jsdom";
import jquery from "jquery";
// setup env run as broswer in cmd
global.document = jsdom.jsdom(
  "<!doctype html><html><body></body></body></html>"
);
global.window = global.document.defaultView;
const $ = jquery(global.window);

// build renderComponent helper

// build helper for simulate

// set up chai-jquery
