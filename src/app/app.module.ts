import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarCursoModule } from './cursos/criar-curso/criar-curso.module';
import { CursoModule } from './cursos/curso.module';
import { FundoAmareloDirective } from './fundoAmarelo/fundo-amarelo.directive';
import { HighlightDirective } from './highlight/highlight.directive';
import { HighlightMouseDirective } from './highlightMouse/highlight-mouse.directive';
import { ItemComponent } from './item/item.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgElseDirective } from './ngElse/ng-else.directive';
import { SwitchComponent } from './switch/switch.component';


@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    NgContentComponent,
    ItemComponent,
    FundoAmareloDirective,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    CriarCursoModule,
    CursoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
