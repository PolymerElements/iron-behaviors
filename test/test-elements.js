import '../../polymer/polymer.js';
import { IronControlState } from '../iron-control-state.js';
import { IronButtonState } from '../iron-button-state.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';

Polymer({

  is: 'test-control',

  behaviors: [
    IronControlState
  ]

});

Polymer({

  is: 'test-button',

  behaviors: [
    IronControlState,
    IronButtonState
  ],

  _buttonStateChanged: function() {

  }

});

Polymer({
  _template: `
    <input id="input">
`,

  is: 'nested-focusable',

  behaviors: [
    IronControlState
  ]
});

Polymer({
  _template: `
    <slot></slot>
`,

  is: 'test-light-dom',

  behaviors: [
    IronControlState,
    IronButtonState
  ]
});
