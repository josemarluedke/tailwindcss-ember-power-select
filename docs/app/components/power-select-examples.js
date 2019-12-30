import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PowerSelectExamplesComponent extends Component {
  cities = ['Barcelona', 'London', 'New York', 'Porto'];
  @tracked destination;
  @tracked selectedName;
  @tracked selectedNames;
  @tracked country;
  @tracked number;

  names = [
    'Stefan',
    'Miguel',
    'Tomster',
    'Tomster 2',
    'Tomster 3',
    'Tomster 4',
    'Tomster 5',
    'Tomster 6',
    'Pluto'
  ];

  countries = [
    { name: 'United States', code: 'US' },
    { name: 'Spain', code: 'ES' },
    { name: 'Portugal', code: 'PT', disabled: true },
    { name: 'Russia', code: 'RU', disabled: true },
    { name: 'Latvia', code: 'LV' },
    { name: 'Brazil', code: 'BR' },
    { name: 'United Kingdom', code: 'GB' }
  ];

  groupedNumbers = [
    { groupName: 'Smalls', disabled: true, options: ['one', 'two', 'three'] },
    { groupName: 'Mediums', options: ['four', 'five', 'six'] },
    {
      groupName: 'Bigs',
      disabled: true,
      options: [
        { groupName: 'Fairly big', options: ['seven', 'eight', 'nine'] },
        { groupName: 'Really big', options: ['ten', 'eleven', 'twelve'] },
        'thirteen'
      ]
    },
    'one hundred',
    'one thousand'
  ];

  @action setField(fieldName, value) {
    this[fieldName] = value;
  }
}
