import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TickerGridComponent } from './ticker-grid/ticker-grid.component';
import { TickerSearchComponent } from './ticker-search/ticker-search.component';
import { TickerService } from './services/ticker.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HttpClient, HttpClientModule,  } from '@angular/common/http';
import { TickerDetailsComponent } from './ticker-grid/ticker-details/ticker-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    TickerGridComponent,
    TickerSearchComponent,
    TickerDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule, 
    ButtonModule,
    FlexLayoutModule
  ],
  providers: [
    TickerService,
    HttpClient,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
