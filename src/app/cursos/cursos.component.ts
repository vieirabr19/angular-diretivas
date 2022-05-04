import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursosList = [];

  constructor(
    private cursosService: CursosService
  ) { }

  ngOnInit(): void {
    this.cursosList = this.cursosService.getCursos();

    CursosService.novoCurso.subscribe(curso => this.cursosList.push(curso));
  }

}
