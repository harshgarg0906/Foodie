import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

export interface DataResponse{
  location_suggestions:any[],
  status:string,
  has_more:number,
  has_total:number,
  user_has_addresses:boolean;
}
export interface CuisineResponse{
  cuisines:any[]
}

export interface EstablishmentResponse{
  establishments:any[];
}

export interface CollectionResponse{
  collections:any[],
  has_more:number,
  share_url:string,
  display_text:string,
  has_total:number,
  user_has_addresses:boolean
}

export interface SearchResturant{
results_found: number,
results_start: number,
results_shown: number,
restaurants:  any[]
}
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }
   private searchHotel=new BehaviorSubject<SearchResturant>(null);
  getCityDetail(city)
  {
   
    let userHeaders=new HttpHeaders({'user-key':'aa37354ab9da9da1c854edb2e6e386ec'})
    let searchParams=new HttpParams().set('q',city);
    //searchParams.append('q','Ajmer')
  return  this.http.get<DataResponse>('https://developers.zomato.com/api/v2.1/cities',{
     headers:userHeaders,
     params:searchParams
   }).pipe(map(responseData=>{
       return responseData.location_suggestions.map((data,index)=>{
         //console.log(data)
         return {'id':data.id,'name':data.name};
       });
   }))
  }

  getCuisine(cityid:string)
  {
    let cusineHeader=new HttpHeaders({'user-key':'aa37354ab9da9da1c854edb2e6e386ec'})
    let cityIdParams=new HttpParams().set('city_id',cityid);
    return this.http.get<CuisineResponse>('https://developers.zomato.com/api/v2.1/cuisines',{
      headers:cusineHeader,
      params:cityIdParams
    })
  }

  getEstablishment(cityId:string)
  {
  //  console.log('in the service')
     let establishmentHeader=new HttpHeaders({'user-key':'aa37354ab9da9da1c854edb2e6e386ec'})
     let establishmentParams=new HttpParams().set('city_id',cityId)
    return this.http.get<EstablishmentResponse>('https://developers.zomato.com/api/v2.1/establishments',{
       headers:establishmentHeader,
       params:establishmentParams
     });
  }

  getCollections(cityId:string)
  {
  //  console.log('in the service')
    let collectionHeaders=new HttpHeaders({'user-key':'aa37354ab9da9da1c854edb2e6e386ec'})
    let collectionParams=new HttpParams().set('city_id',cityId)
    return this.http.get<CollectionResponse>('https://developers.zomato.com/api/v2.1/collections',{
     headers:collectionHeaders,
     params:collectionParams
    }).pipe(map(data=>{
      return data.collections;
    }));
  }

  searchHotels(city:string,cuisine:string,establishment:string,colllect:string)
  {
   // console.log(colllect)
    let searchHeaders=new HttpHeaders({'user-key':'aa37354ab9da9da1c854edb2e6e386ec'})
    let searchParams=new HttpParams().append('entity_id',city).append('cuisines',cuisine)
    .append('establishment_type',establishment).append('collection_id',colllect)
    this.http.get<SearchResturant>('https://developers.zomato.com/api/v2.1/search',{
      headers:searchHeaders,
      params:searchParams
    }).subscribe((data)=>{
        // console.log('in the search subscription')
        // console.log(data)
      this.searchHotel.next(data)
    })
  }

  getBehaviorView(): Observable<any> { 
    return this.searchHotel.asObservable(); 
}
}
