import { Injectable, QueryList, ViewChildren, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveLinkService {
	currentLink = 0;
  constructor() { }
}
