import { Component, OnInit, OnChanges } from '@angular/core';
import * as AppSettings from '@nativescript/core/application-settings';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,OnChanges {
  public nbrArt='0';
  constructor() { }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.nbrArt = AppSettings.getString(`nbr-art`);
  }

  ngOnInit(): void {
    
  }

}
