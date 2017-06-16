import Renderer from 'representy-tool-renderer';

class HTML {
  constructor(options) {
    this.options = options || {};
  }

  load() {
    const { engine, template, data } = this.options;
    return Renderer.renderByEngine(engine, template, data);
  }
}

export default HTML;
export { HTML as Source };
