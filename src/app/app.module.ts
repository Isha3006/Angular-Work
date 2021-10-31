import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './Website/app-header/app-header.component';
import { MainPanelComponent } from './Website/main-panel/main-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    MainPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
