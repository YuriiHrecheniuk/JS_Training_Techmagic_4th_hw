import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeTabComponent} from './tabs/home-tab/home-tab.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShowService} from './services/show.service';
import {TrendingTabComponent} from './tabs/trending-tab/trending-tab.component';
import {DetailTabComponent} from './tabs/detail-tab/detail-tab.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ShowDescriptionComponent} from './components/show-description/show-description.component';
import {SearchTabComponent} from './tabs/search-tab/search-tab.component';
import {SearchFormComponent} from './components/search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeTabComponent,
    TrendingTabComponent,
    DetailTabComponent,
    NavbarComponent,
    ShowDescriptionComponent,
    SearchTabComponent,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
