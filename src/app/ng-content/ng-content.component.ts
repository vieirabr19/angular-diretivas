import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.scss']
})
export class NgContentComponent implements OnInit {
  items: any = [
    {
      title: "Item 1",
      description: "Descrição 1",
      checked: false
    },
    {
      title: "Item 2",
      description: "Descrição 2",
      checked: true
    },
    {
      title: "Item 3",
      description: "Descrição 3",
      checked: true
    },
    {
      title: "Item 4",
      description: "Descrição 4",
      checked: false
    }
  ];

  mostrar = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.items.forEach(item => item.checked = !item.checked);
  }

  toggleAll(){
    this.mostrar = !this.mostrar;
  }

}
