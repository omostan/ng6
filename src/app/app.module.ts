import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestangularModule } from 'ngx-restangular'

// Function for setting the default restangular configuration
export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl('https://jsonplaceholder.typicode.com/');
  RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'})
}

// AppModule is the main entry point into Angular bootstraping process
@NgModule({
  declarations: [
    AppComponent
    , SidebarComponent
    , PostsComponent
    , UsersComponent
    , DetailsComponent
  ],
  // Importing Modules and making default configs for restangular
  imports: [
    BrowserModule
    , AppRoutingModule
    , HttpClientModule
    , BrowserAnimationsModule
    , RestangularModule.forRoot(RestangularConfigFactory)        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
