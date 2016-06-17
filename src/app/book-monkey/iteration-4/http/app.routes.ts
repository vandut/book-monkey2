import { RouterConfig } from '@angular/router';
import { HomeComponent } from './home/index';
import { BookListComponent } from './book-list/index';
import { BookDetailsComponent } from './book-details/index';
import { BookFormComponent } from './book-form/index';

export const AppRoutes: RouterConfig = [
  {
    path: '',  
    redirectTo: 'home'
  },
  { 
    path: 'home',  
    component: HomeComponent 
  },
  { 
    path: 'books', 
    component: BookListComponent, 
    children: [
      { 
        path: ':isbn', 
        component: BookDetailsComponent 
      }
    ]
  },
  { 
    path: 'admin', 
    component: BookFormComponent, 
    children: [
      { 
        path: ':isbn', 
        component: BookFormComponent
      }
    ]
  }
]