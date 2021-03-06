/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '@polymer/polymer/polymer-legacy.js';

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {IronButtonState} from '../iron-button-state.js';
import {IronControlState} from '../iron-control-state.js';

Polymer({

  is: 'test-control',

  behaviors: [IronControlState]

});
Polymer({

  is: 'test-button',

  behaviors: [IronControlState, IronButtonState],

  _buttonStateChanged: function() {

  }

});
Polymer({
  _template: html`
    <input id="input">
`,

  is: 'nested-focusable',
  behaviors: [IronControlState]
});
Polymer({
  _template: html`
    <slot></slot>
`,

  is: 'test-light-dom',
  behaviors: [IronControlState, IronButtonState]
});
