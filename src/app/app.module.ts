import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BotComponent } from './bot/bot.component';
import { RouterModule, Routes } from '@angular/router';


import { FormsModule } from '@angular/forms';
import { Adal5Service, Adal5HTTPService } from 'adal-angular5';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataTableModule} from 'primeng/datatable';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';

const appRoutes: Routes = [
  {
    path: 'DataTable',
    component: BotComponent
  },
  { path: '',
    redirectTo: '/DataTable',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    BotComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CalendarModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    DataTableModule,
    MultiSelectModule,
    DropdownModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    Adal5Service,
    { provide: Adal5HTTPService, useFactory: Adal5HTTPService.factory, deps: [HttpClient, Adal5Service] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
