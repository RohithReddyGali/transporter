import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { RouteDetailsComponent } from './components/calculator/route-details/route-details.component';
import { ReserveComponent } from './components/calculator/reserve/reserve.component';

const routes: Routes = [
    { 
      path: 'calculator',
      component: CalculatorComponent,
      children: [
        {
          path: '',
          component: RouteDetailsComponent
        },
        {
          path: 'reserve',
          component: ReserveComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
