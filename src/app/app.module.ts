import { FundoAmareloDirective } from './fundoAmarelo/fundo-amarelo.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchComponent } from './switch/switch.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';
import { HighlightMouseDirective } from './highlightMouse/highlight-mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    NgContentComponent,
    ItemComponent,
    FundoAmareloDirective,
    HighlightMouseDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
