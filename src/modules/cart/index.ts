import { BASE_URL } from "@/constants";

export class Cart {
  baseURL: string = BASE_URL;

  constructor() {}

  public createPrettyData(data: number[]) {
    // create unique ids
    // @ts-ignore
    let uniqueProductsID = [...new Set(data)];
    // create new arrae
    let formatProductsData: {}[] = [];
    // create new array products
    uniqueProductsID.map((e: number) => {
      // create count
      let counter = 0;
      data.map((item: number) => {
        if (e == item) {
          counter++;
        }
      });
      // create frame
      formatProductsData.push({ id: e, count: counter });
    });
    return formatProductsData;
  }
}
