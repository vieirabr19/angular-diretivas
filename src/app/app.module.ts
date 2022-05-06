import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
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
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { SettingsService } from './services/settings.service';
import { FiltroArrayPipe } from './pipes/filtro-array.pipe';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    NgContentComponent,
    ItemComponent,
    FundoAmareloDirective,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    CamelCasePipe,
    ExemplosPipesComponent,
    FiltroArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    CriarCursoModule,
    CursoModule
  ],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt'
    // }
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService => settingsService.getLocale())
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
