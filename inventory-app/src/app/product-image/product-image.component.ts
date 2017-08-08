import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-image',
  templateUrl: `
    <img class="product-image" [src]="product.imageUrl" />
  `
})
export class ProductImageComponent {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() { }
}
