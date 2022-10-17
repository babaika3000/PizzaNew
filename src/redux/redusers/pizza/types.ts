
export enum Status {
    LOADING = 'loading',
    SUCCESS = 'fulfilled',
    ERROR = 'rejected',
}
export type PizzaItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
};

export interface IPizzaSlice {
    items: PizzaItem[];
    status: Status;
}

export type SearchPizzaItems = {
    pageCount: string;
    sortId: string;
    category: string;
    searchPizza: string;
}
