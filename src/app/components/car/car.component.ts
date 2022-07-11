import {Component, Input, OnInit} from '@angular/core';
import {ICar} from "../../interfaces";
import {CarService} from "../../services";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carForUpdate: ICar | null;
@Input()
car:ICar;
  constructor(private carService:CarService) { }

  ngOnInit(): void {
  }

}
