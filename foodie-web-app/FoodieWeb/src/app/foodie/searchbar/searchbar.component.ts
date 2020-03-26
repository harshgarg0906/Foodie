import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodService } from '../food.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(private foodService:FoodService) { }

  searchForm:FormGroup
  cityInput='';
  cityLenght=0;
  cityData={
    'id':0,
    'name':''
  }
  cuisines: any[];
  establishments:any[];
  collections:any[];
  cuisineInput='';

  cityId:string;
  ngOnInit(): void {
    this.searchForm=new FormGroup({
      city:new FormControl(null,Validators.required),
      cuisine:new FormControl(null,Validators.required),
      establishment:new FormControl(null,Validators.required),
      colllection:new FormControl(null,Validators.required)
    })
   
  }

  onSubmit()
  {
    console.log('in the submit')
    // console.log(this.searchForm.value)
    // console.log(this.searchForm.value.colllection)
    this.foodService.searchHotels(this.searchForm.value.city,
      this.searchForm.value.cuisine,this.searchForm.value.establishment,this.searchForm.value.colllection);
  }

  onInput(event:Event)
  {
   this.cityInput=(<HTMLInputElement>event.target).value;
   this.cityLenght=this.cityInput.length;
  // console.log(this.cityLenght)
   if(this.cityLenght>=5)
   {
    this.foodService.getCityDetail(this.cityInput).pipe(
      switchMap((data)=>{
        // console.log('in the pipe of component')
        // console.log(data[0])
        // console.log(data[0].id)
        this.cityId=data[0].id;
        return this.foodService.getCuisine(data[0].id)
      })
    ).subscribe(response=>{
      this.cuisines=response.cuisines
      this.cuisines.forEach((data)=>{
      })
    })
   }

  // this.foodService.getCityDetail(this.cityInput)
  }

  onSelect(event:Event)
  {
   this.cuisineInput=(<HTMLInputElement>event.target).value
  // console.log(this.cuisineInput)
  // console.log('city id'+this.cityId);
   this.foodService.getEstablishment(this.cityId).subscribe((data)=>{
    //  console.log('in the subscription')
    //  console.log(data.establishments);
     this.establishments=data.establishments;
   });

   this.foodService.getCollections(this.cityId).subscribe((data)=>{
    // console.log('in the subscription of the collection')
    // console.log(data)
    this.collections=data;
  });
  }

}
