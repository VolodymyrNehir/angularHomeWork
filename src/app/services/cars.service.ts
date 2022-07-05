import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICar} from "../interface";
import {Observable} from "rxjs";
import {urls} from "../contents/urls";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor( private httpClient:HttpClient) { }

  create(car:ICar): Observable<ICar>{
    return this.httpClient.post<ICar>(urls.cars, car)
  }

  getAll(): Observable<ICar[]>{
    return this.httpClient.get<ICar[]>(urls.cars)
  }

  getById(id:string):Observable<ICar>{
    return this.httpClient.get<ICar>(`${urls.cars}/${id}`)
  }

  deleteById(id:number): Observable<void>{
    return this.httpClient.delete<void>(`${urls.cars}/${id}`)
  }

  updateById(id:string, carPartial:Partial<ICar>): Observable<ICar>{
    return this.httpClient.put<ICar>(`${urls.cars}/${id}`,carPartial)
  }
}
