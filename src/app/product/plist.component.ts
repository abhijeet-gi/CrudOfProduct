import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
@Component({
    selector:"plist",
    templateUrl:"./plist.component.html",
    styleUrls:["./plist.component.css"]
})
export class plistcomponent implements OnInit{
    parr:Product[];
    constructor(private pservice:ProductService){
        console.log("Plist constructor called");
    }

    ngOnInit(){
        console.log("ngInIt plist called");
        this.parr=this.pservice.getAllProduct();
    }
}