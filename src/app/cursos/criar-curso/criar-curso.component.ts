import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss'],
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

  cursosList = [];

  constructor(
    private cursosService: CursosService
  ) { }

  ngOnInit(): void {
    this.cursosList = this.cursosService.getCursos();
    // this.cursosService.emitirCursoCriado.subscribe(curso => console.log(curso));
  }

  criarCurso(curso){
    this.cursosService.criarCurso(curso);
  }

}
