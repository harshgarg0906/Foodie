import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FoodService } from '../food.service';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl,Validators, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-hotellist',
  templateUrl: './hotellist.component.html',
  styleUrls: ['./hotellist.component.css']
})
export class HotellistComponent implements OnInit {

  constructor(private foodService:FoodService,private formBuilder:FormBuilder) { }
  
 resturantList:any[];
 hotelForm:FormGroup;
  ngOnInit(): void {
    this.foodService.getBehaviorView().pipe(map((responseData)=>{
        if(responseData===null)
        {
          return [];
        }
        else
        {
          return responseData.restaurants;
        }
    })).subscribe((data)=>{
     // console.log('in the holtel display')
     // console.log(data)
      this.resturantList=data
    })
    this.hotelForm=this.formBuilder.group({
      comments:this.formBuilder.array([])
    })
  }

  get commentForm()
  {
    return this.hotelForm.get('comments') as FormArray;
  }

  onSubmit(name:HTMLInputElement,timing:HTMLInputElement)
  {
   // console.log(this.hotelForm.value)
   console.log(name.value)
   console.log((< HTMLInputElement >timing).value)
   console.log(this.hotelForm.value)
   console.log(this.resturantList);
   const resturaantId=this.resturantList.filter((data)=>{
     if(data.restaurant.name==name.value)
     {
       return data.restaurant.id;
     }
   })
   console.log(resturaantId[0].restaurant.id);
  }
  addComment(){
    const data=this.formBuilder.group(
      {
        comment:[]
      }
    )
    this.commentForm.push(data);
  }

}
