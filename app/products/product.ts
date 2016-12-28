export interface IProduct{
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

//useful if we need to do some extra functionality as calculate discount, etc..
// export class Product implements IProduct {
//     constructor (public productId :number, ){

//     }

//     calculateDisccount(percent:number):number{
//         return this.price;
//     }
//}