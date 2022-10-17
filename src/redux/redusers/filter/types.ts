


export  enum SortPropertyVale {
    RATING = 'rating',
    PRICE = 'price',
    TITLE = 'title'
}
export type SortType = {
    name: string;
    propertyValue: SortPropertyVale;
}

export interface IFiltersSlice  {
    sort: SortType;
    categorei: number;
    searchPizza: string;
    pageCount: number;
}
