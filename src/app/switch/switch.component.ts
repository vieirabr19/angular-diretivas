import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  aba = '0';
  menus = ['Home', 'Lista', 'Mapa', 'Contato', 'Trabalhe conosco'];

  constructor() { }

  ngOnInit(): void {
  }

}
