

export default initialize;
/**
 * @module ember-paper
 */
var hasDOM = typeof document !== 'undefined';
var defaultWormhole = 'paper-wormhole';
function initialize() {
  if (!hasDOM) {
    return;
  }

  var application = arguments[1] || arguments[0];
  var rootElementSelector = application.rootElement || 'body';
  var rootElement = document.querySelector(rootElementSelector);

  var wormhole = document.createElement('div');
  wormhole.id = defaultWormhole;

  rootElement.appendChild(wormhole);
}