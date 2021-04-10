export interface ISearchAllState {
    galleries: IRecord;
    exhibitions: IRecord;
    collectives: IRecord;
}

interface IRecord {
    data: any;
    page: IPage
}

interface IPage {
    lastPage: ILastPage;
}

interface ILastPage {
    index: number;
}
