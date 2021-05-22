import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposemailComponent } from './composemail/composemail.component';
import { MainComponent } from './main/main.component';
import { SendmailComponent } from './sendmail/sendmail.component';

const routes: Routes = [
  {path:'home' , component:MainComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'composemail', component:ComposemailComponent},
  {path:'sendmail', component:SendmailComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]                                    
})
export class AppRoutingModule {}
export const routingComponents=[ComposemailComponent,SendmailComponent,MainComponent]
