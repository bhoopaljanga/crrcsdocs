import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { DocsListComponent } from './list/list.component'; 
import { ProdcutComponent } from './products/product.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Docs',
    },
    children: [
      {
        path: '',
        redirectTo: 'prodcuts',
      },
      {
        path: 'list',        
        component: DocsListComponent,
        data: {
          title: 'Docs',
        },
      } , {
        path: 'prodcuts',        
        component: ProdcutComponent,
        data: {
          title: 'Prodcuts',
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

