import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { MyMaterialModule } from './my-material.module';

import { AppRoutes} from './app.routes';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubService } from './services/github-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserListComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    MyMaterialModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
