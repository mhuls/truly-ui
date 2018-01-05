/*
 MIT License

 Copyright (c) 2018 Temainfo Sistemas

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
import { Component, ViewContainerRef } from '@angular/core';

import * as json from './shortcutdemo-dataproperties.json';
import * as jsonEvts from './shortcutdemo.dataevents.json';
import { DialogService } from '../../../components/dialog/dialog.service';

@Component( {
  selector : 'app-shortcut',
  templateUrl : './shortcutdemo.component.html',
  styleUrls : [ './shortcutdemo.component.scss' ]
} )
export class ShortcutDemoComponent {

  public dataTableProperties;

  public dataEvents;

  constructor( public view: ViewContainerRef, public dialogService: DialogService ) {
    this.dialogService.setView(this.view);
    this.dataTableProperties = json.dataProperties;
    this.dataEvents = jsonEvts.dataEvents;
  }

  showDialog(text) {
    this.dialogService.info( text, ( modalResult ) => {
      console.log('Return', modalResult);
    });
  }

}

