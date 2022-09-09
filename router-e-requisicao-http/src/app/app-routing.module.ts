import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { NewPageComponent } from './components/new-page/new-page.component';
import { RenderListComponent } from './components/render-list/render-list.component';

const routes: Routes = [
  /* equivalente a rota "/", irá renderizar as informações
  referente ao componente new-page na rota principal. */
  { path: '', component: NewPageComponent },
  /* a página /list irá renderizar a lista existente no
  componente render-list. */
  { path: 'list', component: RenderListComponent },
  { path: 'characters', component: CharactersComponent }
];

@NgModule({
  declarations: [],
  /* aqui dizemos que as rotas começam da raiz do nosso site, 
  assim como é feito no React. */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
