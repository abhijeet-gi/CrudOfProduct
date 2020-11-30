import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class ProductService{
    parr=[ new Product(11,"Lays",30),
            new Product(12,"Coke",25),
            new Product(13,"Pepsi",20),
            new Product(14,"Dark Fantecy",40),
        ];

        getAllProduct():Product[]{
            return this.parr;
        }

        AddProduct(p:Product){
            this.parr.push(p);
        }

        updateProduct(p:Product){
            for(let i=0;i<this.parr.length;i++){
                if(p.pid==this.parr[i].pid){
                    this.parr[i].pname=p.pname;
                    this.parr[i].price=p.price;
                    break;
                }
            }
        }

        deleteProduct(p:Product){
            for(var i=0;i<this.parr.length;i++){
                if(p.pid==this.parr[i].pid){
                    //delete object fronm array from ith position 
                    this.parr.splice(i,1);
                }
            }
        }
}