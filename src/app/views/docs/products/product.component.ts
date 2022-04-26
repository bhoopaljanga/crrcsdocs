import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
 

import { ShoppingCartService, CartItem, Totals } from '../shopping-cart.service';

@Component({
  selector: 'app-prodcut',
  templateUrl: './product.component.html' 
})
export class ProdcutComponent implements OnInit   {

  name = 'Shopping Cart';
  processing = false;
  cartState$ = this.shoppingCartService.state$;
  constructor(private shoppingCartService: ShoppingCartService,
    private http: HttpClient,
    private route: ActivatedRoute) {

      this.route.params.subscribe(params=>{
        this.getPaymentDetails();
      })

   }

  ngOnInit(): void { 
  }

  addItemToCart(item: CartItem) {
    this.shoppingCartService.addCartItem(item);
  }

  remove(item: CartItem): void {
    this.shoppingCartService.removeCartItem(item);
  }

  paymentDetails:any;
  getPaymentDetails(){ 

    
  const queryParams = this.route.snapshot.queryParams;

  const paymentId = queryParams['paymentId'];
  if(!paymentId)
    return
  const token = queryParams['token'];
  const PayerID = queryParams['PayerID'];
  this.processing = true;
     
      this.http.get('https://cnsmzwycy43jf7c6egulpxvtxm0xtdxc.lambda-url.ap-south-1.on.aws',{ 
        params:{"paymentId": paymentId as string,token:token as string, payerID: PayerID as string}
      }).subscribe((details:any)=>{
        this.paymentDetails = details;
        this.processing = false;
       console.log(details)
      })
    
    //paymentId=PAYID-MJUCVCA9W074514VV412114R&token=EC-8BE00145BD285080W&PayerID=Z4J5Y9667WSNY
  }

}
