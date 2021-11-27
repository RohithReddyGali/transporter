import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.scss']
})
export class RouteDetailsComponent implements OnInit {

  activeTab!: any;
  routeForm!: FormGroup;
  timeOptions: any = [];
  vehicleOptions: any = [];
  selectedTime = "";
  selectedVehicle = "";

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.activeTab = "route";
    this.routeForm = this.fb.group({
      from: [''],
      to: [''],
      time: [''],
      vehicle: ['']
    });
    this.timeOptions = [
      { name: 'As soon as possible', code: 'early' },
      { name: 'With in 7 days', code: '7days' },
      { name: 'On a particular date', code: 'particularDate' },
      { name: 'I dont know yet', code: 'dontknow' }
    ]
  }

  onSubmit() {
    this.router.navigate(['calculator/reserve']);
  }
}
