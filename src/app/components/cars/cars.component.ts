import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ICar} from "../../interface";
// import {FormGroup} from "@angular/forms";
import {CarsService} from "../../services";


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars:ICar[];
  form: FormGroup;
  carForUpdate: ICar | null;


  constructor(private carsService:CarsService) { }

  ngOnInit(): void {
    this.carsService.getAll().subscribe(cars => this.cars = cars )
    console.log(this.carForUpdate)
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
  update(cars: ICar): void {
    this.carForUpdate = cars
    this.form.setValue({model: cars.model, year: cars.year, price: cars.price})
  }
}
