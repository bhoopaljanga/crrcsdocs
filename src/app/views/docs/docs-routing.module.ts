import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { DocsListComponent } from './list/list.component'; 
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Docs',
    },
    children: [
      {
        path: '',
        redirectTo: 'list',
      },
      {
        path: 'list',        
        component: DocsListComponent,
        data: {
          title: 'Docs',
        },
      }  
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}

