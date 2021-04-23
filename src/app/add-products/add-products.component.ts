import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  allProduct: Object;
  isEdit: Boolean;
  prodObj = {
    productId: '',
    productName: '',
    price: '',
  }

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getAllProducts();
   }

  addProduct(formObj) {
    console.log(formObj);
    this.commonService.createProduct(formObj).subscribe((response) => {
      this.getAllProducts();
      console.log('test');

    })

  }

  getAllProducts() {
    console.log('test111');
  this.commonService.getAllProducts().subscribe((response) => {
    console.log(response);
    this.allProduct =  response;

  })
  }

  editProduct(product) {
    this.isEdit = true;
    this.prodObj = product;
  }

  updateProduct() {
    this.isEdit = !this.isEdit;
    this.commonService.updateProduct(this.prodObj).subscribe((response) => {
      this.getAllProducts();
    })

  }

  deleteProduct(product) {
    this.commonService.deleteProduct(product).subscribe(() => {
      this.getAllProducts()

    });
  }




}

