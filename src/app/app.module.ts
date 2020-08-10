import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router'
import {MatTableModule,MatInputModule} from '@angular/material'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Covid19Component } from './Covid/Covid.component';
import { Covid19serService } from './Covid.service';

const routes : Route[] = [
  {path : 'corona',component:Covid19Component}
  ]
  

@NgModule({
  declarations: [
    AppComponent,
    Covid19Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatFormFieldModule,
    MatInputModule,
    
    RouterModule.forRoot(routes)
  ],
  providers: [
    Covid19serService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
