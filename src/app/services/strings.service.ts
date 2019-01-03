import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringsService {

  shopkeep: string = 'Hello welcome to Saving Grace\'s! Just click on anything you want to add to your cart.';

  constructor() { }
}
