import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeTabComponent} from './components/tabs/home-tab/home-tab.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MovieService} from './services/movie.service';
import {TrendingTabComponent} from './components/tabs/trending-tab/trending-tab.component';
import {DetailTabComponent} from './components/tabs/detail-tab/detail-tab.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ShowDescriptionComponent} from './components/show-description/show-description.component';
import {SearchTabComponent} from './components/tabs/search-tab/search-tab.component';
import {SearchFormComponent} from './components/tabs/search-tab/search-form/search-form.component';

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
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
