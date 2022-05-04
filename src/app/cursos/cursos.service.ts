import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static novoCurso = new EventEmitter<string>();

  private cursos = ['Angular','Java','Phonegap'];

  constructor(
    private logService: LogService
  ) { 
    console.log('CursosService');
  }

  getCursos(){
    this.logService.logMsg('Obtendo lista de curos');
    return this.cursos;
  }

  criarCurso(curso: string){
    this.cursos.push(curso);
    this.logService.logMsg(`Você criou o curso: ${curso}`);
    this.emitirCursoCriado.emit(curso);
    CursosService.novoCurso.emit(curso);
  }
}
