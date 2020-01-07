import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ThemeSwitcherComponent extends Component {
  mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

  @service cookies;
  @tracked prefersDark = this.mediaQueryList.matches;
  @tracked forceDark;

  constructor(owner, args) {
    super(owner, args);
    this.mediaQueryList.onchange = ({ matches }) => {
      this.prefersDark = matches;
    };

    if (this.cookies.read('prefersDarkMode') === 'false') {
      this.forceDark = false;
    } else if (this.cookies.read('prefersDarkMode') === 'true') {
      this.forceDark = true;
    }
    this.applyClasses();
  }

  get isDarkModeEnabled() {
    if (typeof this.forceDark === 'boolean') {
      return this.forceDark;
    }

    return this.prefersDark;
  }

  applyClasses() {
    if (this.isDarkModeEnabled) {
      document.documentElement.classList.add('mode-dark');
    } else {
      document.documentElement.classList.remove('mode-dark');
    }
  }

  @action toggleMode() {
    if (this.isDarkModeEnabled) {
      this.forceDark = false;
    } else {
      this.forceDark = true;
    }
    this.cookies.write('prefersDarkMode', this.forceDark);
    this.applyClasses();
  }
}
