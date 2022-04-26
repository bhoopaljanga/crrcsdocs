import { Component, Input, OnInit } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';
 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent   {
  @Input() state: any;

  constructor(private shoppingCartService: ShoppingCartService,
    private http: HttpClient) { }

  checkout(): void {
     
    this.http.get('https://cnsmzwycy43jf7c6egulpxvtxm0xtdxc.lambda-url.ap-south-1.on.aws',{ 
      params:{amount: this.state.tot?.grandTot.toFixed(2)},
      responseType: 'text'
    }).subscribe((preSignedUrl)=>{
      location.href =  preSignedUrl as string;
    })
  }

}
