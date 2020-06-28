import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/global/header/header.component';
import { FooterComponent } from './components/global/footer/footer.component';
import { ModelsComponent } from './components/models/models.component';
import { HttpClientModule } from '@angular/common/http';
import { SortByPipe } from './components/models/pipes/sort-by.pipe';
import { FilterByPipe } from './components/models/pipes/filter-by.pipe';
import { ModelItemComponent } from './components/model-item/model-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ModelsComponent,
    SortByPipe,
    FilterByPipe,
    ModelItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
