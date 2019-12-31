import Component from '@glimmer/component';
import { action } from '@ember/object';
import hljs from 'highlight.js/lib/highlight';

import javascript from 'highlight.js/lib/languages/javascript';
import shell from 'highlight.js/lib/languages/shell';
import htmlbars from 'highlight.js/lib/languages/htmlbars';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('handlebars', htmlbars);
hljs.registerLanguage('hbs', htmlbars);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('sh', shell);

export default class CodeBlockComponent extends Component {
  @action setupHighlight(element) {
    hljs.highlightBlock(element);
  }
}
