import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NovelsComponent } from './novels/novels.component';
import { UserComponent } from './user/user.component';
/*COMPONENTS*/

/*SERVICES*/
import { ConfigService } from '../services/config.service';

/*BOOTSTRAP*/
import { NgbRating, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

import { MaterialModule } from './material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NovListComponent } from './nov-list/nov-list.component';
import { NovDescComponent } from './nov-desc/nov-desc.component';

const routes: Routes = [
  {
    path: 'novels/add',
    component: NovelsComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'home',
    component: UserComponent
  },
  {
    path: 'novels/list',
    component: NovListComponent
  }
  ]

@NgModule({
  declarations: [
    AppComponent,
	  NgbRating,
    MoviesComponent,
    NovelsComponent,
    UserComponent,
    NgbCarousel,
    SidebarComponent,
    NovListComponent,
    NovDescComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
	HttpModule,
	ReactiveFormsModule,
	MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
