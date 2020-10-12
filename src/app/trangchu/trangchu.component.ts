import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../lib/base.component';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector) { super(injector) }

  ngOnInit(): void {
    this.loadScripts();
  }

}
