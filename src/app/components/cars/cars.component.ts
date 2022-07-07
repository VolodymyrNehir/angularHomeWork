import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ICar} from "../../interface";
import {CarsService} from "../../services";
import {RegEx} from '../../contents/index';



@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars:ICar[];
  form: FormGroup;
  carForUpdate: ICar | null;


  constructor(private carsService:CarsService) {
    this.createForm()
  }

  ngOnInit(): void {
    this.carsService.getAll().subscribe(cars => console.log(cars) )

  }

  save() {
    if (!this.carForUpdate) {
      this.carsService.create(this.form.value).subscribe(value => {
        this.cars.push(value)
        this.form.reset()
      })
    } else {
      this.carsService.updateById(this.carForUpdate.id, this.form.value).subscribe(value => {
        const updateCar = this.cars.find(f => f.id === this.carForUpdate?.id);
        Object.assign(updateCar, value)
        this.carForUpdate = null
      })
    }
  }

  createForm(): void{
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.pattern(RegEx.model)]),
      year: new FormControl(1990,[Validators.min(1990), Validators.max(new Date().getFullYear())]),
      price: new FormControl(0,[Validators.min(0)])
    })
  }

  update(cars: ICar): void {
    this.carForUpdate = cars
    this.form.setValue({model: cars.model, year: cars.year, price: cars.price})
  }
}
