import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from 'src/app/design/design.component';
import { SplashComponent } from './splash/splash.component';
import { ContentComponent } from './content/content.component';
import { IllustrationComponent } from './illustration/illustration.component';

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component: SplashComponent },
  
  { path: 'content', component: ContentComponent,
    children:  [
      { path: 'design', component: DesignComponent }, 
      { path: 'illustration',  component: IllustrationComponent }
    ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
