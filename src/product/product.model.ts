export class ProductModel {
    image: string;
    title: string;
    price: number;
    oldprice: number;
    credit: number;
    calculatedRaiting: number;
    description: string;
    advantages: string;
    disAdvantages: string;
    categories: string[];
    tags: string;
    characterisitics: {
        [key: string]: string;
    };
}
