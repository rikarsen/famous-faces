import { Component } from '@angular/core';

/**
 * Generated class for the KeyboardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'keyboard',
  templateUrl: 'keyboard.html',
})
export class KeyboardComponent {
  public rows: number[];
  public keys: any[];
  public resultKeys: any[];
  public selectedResultKey: number;

  constructor () {
    this.rows = [0, 1, 2];
    this.keys = [{
      latter: 'Q',
      row: 0,
    }, {
      latter: 'W',
      row: 0,
    }, {
      latter: 'E',
      row: 0,
    }, {
      latter: 'R',
      row: 0,
    }, {
      latter: 'T',
      row: 0,
    }, {
      latter: 'Y',
      row: 0,
    }, {
      latter: 'U',
      row: 0,
    }, {
      latter: 'I',
      row: 0,
    }, {
      latter: 'O',
      row: 0,
    }, {
      latter: 'P',
      row: 0,
    }, {
      latter: 'A',
      row: 1,
    }, {
      latter: 'S',
      row: 1,
    }, {
      latter: 'D',
      row: 1,
    }, {
      latter: 'F',
      row: 1,
    }, {
      latter: 'G',
      row: 1,
    }, {
      latter: 'H',
      row: 1,
    }, {
      latter: 'J',
      row: 1,
    }, {
      latter: 'K',
      row: 1,
    }, {
      latter: 'L',
      row: 1,
    }, {
      latter: 'Z',
      row: 2,
    }, {
      latter: 'X',
      row: 2,
    }, {
      latter: 'C',
      row: 2,
    }, {
      latter: 'V',
      row: 2,
    }, {
      latter: 'B',
      row: 2,
    }, {
      latter: 'N',
      row: 2,
    }, {
      latter: 'M',
      row: 2,
    }];

    this.resultKeys = [{
      latter: '',
    }, {
      latter: '',
    }, {
      latter: '',
    }, {
      latter: '',
    }, {
      latter: '',
    }];
    this.selectedResultKey = 0;
  }

  public selectResultKey (index: number) {
    this.selectedResultKey = index;
  }

  public onKeyPress (key) {
    this.resultKeys[this.selectedResultKey].latter = key.latter;

    if (this.selectedResultKey < this.resultKeys.length - 1) {
      this.selectedResultKey++;
    }
  }
}
