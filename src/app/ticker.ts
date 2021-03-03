export interface Ticker {
    name: string;
    price: number;
    tickerMetadata?: TickerMetdata;
}

export interface TickerMetdata {
    totalMoveToday: number;
    totalMoveThisWeek: number;
    totalMoveThisMonth: number;
    totalMoveThisYear: number;
    totalMoveAllTime: number;
}