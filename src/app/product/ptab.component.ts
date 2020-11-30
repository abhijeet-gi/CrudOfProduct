import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
    selector:"ptab",
    templateUrl:"./ptab.component.html",
    styleUrls:["./ptab.component.css"]
})
export class ptabcomponent{
    flag=false;
    parr:Product[];
    pob:Product;
    constructor(private pservice:ProductService){
        console.log("ptab constructor called")
    }
    ngOnInit(){
        console.log("ngInit  of ptab");
        this.parr=this.pservice.getAllProduct();
    }
        ShowForm(){
            this.flag=true;
        }
        updateproduct(p:Product){
            this.flag=true;
            this.pob=p;
        }
        
        deleteProduct(p:Product){
            this.pservice.deleteProduct(p);
        }
}