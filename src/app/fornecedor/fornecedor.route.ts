import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FornecedorAppComponent } from './fornecedor.app.component';
import { NovoComponent } from './novo/novo.component';
import { ListaComponent } from './lista/lista.component';
import { EditarComponent } from './editar/editar.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { FornecedorResolver } from './services/fornecedor.resolver';

const fornecedorRouterConfig: Routes = [
  {
    path: '', component: FornecedorAppComponent,
    children: [
      { path: 'listar-todos', component: ListaComponent },
      { path: 'adicionar-novo', component: NovoComponent },
      {
        path: 'editar/:id', component: EditarComponent,
        resolve: {
          fornecedor: FornecedorResolver
        }
      },
      {
        path: 'detalhes/:id', component: DetalhesComponent,
        resolve: {
          fornecedor: FornecedorResolver
        }
      },
      {
        path: 'excluir/:id', component: ExcluirComponent,
        resolve: {
          fornecedor: FornecedorResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(fornecedorRouterConfig)
  ],
  exports: [RouterModule]
})
export class FornecedorRoutingModule { }
