import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	
  rows = [0, 1, 2];
  ratesObj: any = {};

  hotels = [
    {
      nome: 'Hote 1',
      rooms: [
        {
          Descricao: 'Quarto 1',
          rates: [
            { roomIndex: 1, disponibilidade: 3, refeicao: 'Café da Manhã 1', preco: 100 },
            { roomIndex: 1, disponibilidade: 4, refeicao: 'Café da Manhã 1', preco: 200 },
            { roomIndex: 1, disponibilidade: 5, refeicao: 'Café da Manhã 1', preco: 300 },
            { roomIndex: 2, disponibilidade: 3, refeicao: 'Café da Manhã 1', preco: 400 },
            { roomIndex: 2, disponibilidade: 4, refeicao: 'Café da Manhã 1', preco: 500 },
            { roomIndex: 2, disponibilidade: 5, refeicao: 'Café da Manhã 1', preco: 600 },
            { roomIndex: 3, disponibilidade: 3, refeicao: 'Café da Manhã 1', preco: 700 },
            { roomIndex: 3, disponibilidade: 4, refeicao: 'Café da Manhã 1', preco: 800 },
            { roomIndex: 3, disponibilidade: 5, refeicao: 'Café da Manhã 1', preco: 900 }
          ]
        },
        {
          Descricao: 'Quarto 2',
          rates: [
            { roomIndex: 1, disponibilidade: 3, refeicao: 'Café da Manhã 2', preco: 100 },
            { roomIndex: 1, disponibilidade: 4, refeicao: 'Café da Manhã 2', preco: 200 },
            { roomIndex: 1, disponibilidade: 5, refeicao: 'Café da Manhã 2', preco: 300 },
            { roomIndex: 2, disponibilidade: 3, refeicao: 'Café da Manhã 2', preco: 400 },
            { roomIndex: 2, disponibilidade: 4, refeicao: 'Café da Manhã 2', preco: 500 },
            { roomIndex: 2, disponibilidade: 5, refeicao: 'Café da Manhã 2', preco: 600 },
            { roomIndex: 3, disponibilidade: 3, refeicao: 'Café da Manhã 2', preco: 700 },
            { roomIndex: 3, disponibilidade: 4, refeicao: 'Café da Manhã 2', preco: 800 },
            { roomIndex: 3, disponibilidade: 5, refeicao: 'Café da Manhã 2', preco: 900 }
          ]
        },
        {
          Descricao: 'Quarto 3',
          rates: [
            { roomIndex: 1, disponibilidade: 3, refeicao: 'Café da Manhã 3', preco: 100 },
            { roomIndex: 1, disponibilidade: 4, refeicao: 'Café da Manhã 3', preco: 200 },
            { roomIndex: 1, disponibilidade: 5, refeicao: 'Café da Manhã 3', preco: 300 },
            { roomIndex: 2, disponibilidade: 3, refeicao: 'Café da Manhã 3', preco: 400 },
            { roomIndex: 2, disponibilidade: 4, refeicao: 'Café da Manhã 3', preco: 500 },
            { roomIndex: 2, disponibilidade: 5, refeicao: 'Café da Manhã 3', preco: 600 },
            { roomIndex: 3, disponibilidade: 3, refeicao: 'Café da Manhã 3', preco: 700 },
            { roomIndex: 3, disponibilidade: 4, refeicao: 'Café da Manhã 3', preco: 800 },
            { roomIndex: 3, disponibilidade: 5, refeicao: 'Café da Manhã 3', preco: 900 }
          ]
        }
      ]
    }
  ];
  
  ngOnInit(): void {
    const totalRows = this.rows.length;
	
    for(let i = 0; i < totalRows; i++) {
      this.ratesObj[i+1] = this.hotels[0].rooms.map(room => {
        console.log('QUARTOS',i+1,room);
        return room.rates.filter(rate => rate.roomIndex === i+1);
      })[0];
      console.log(this.ratesObj);
    }
  }
}
