export interface FtxApiObject {//ftx get response type
    success: Boolean;
    result: MarketDataObject[] | MarketDataObject | SingleMarketObject
    error: string
}

export interface MarketDataObject {
    startTime: string;
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    ema: number;
}

export interface BotConfig {
    pairing: string;
    windowResolution: string;
    secretKeyPath: string;
    emaInterval: string;
    cexData: string;
    dex: string;
    stopLoss: number
    data: null | MarketDataObject[]
}

export interface HistoricData {

}

export interface SecretKeyObj {
    sp: string;
    pk: number[]
}

export interface SingleMarketObject{
    name: string;
    baseCurrency: null;
    quoteCurrency: null;
    quoteVolume24h: number;
    change1h: number;
    change24h: number;
    changeBod: number;
    highLeverageFeeExempt: boolean;
    minProvideSize: number;
    type: string;
    underlying: string;
    enabled: boolean;
    ask: number;
    bid: number;
    last: number;
    postOnly: boolean;
    price: number;
    priceIncrement: number;
    sizeIncrement: number;
    restricted: boolean;
    volumeUsd24h: number;
    largeOrderThreshold: number;
    isEtfMarket: boolean;
}

export interface indicators {
    ema: number;
    rsi: number;
    sma: number;
    macd: number;
}

export interface CexClient {
    
}

export interface PoolList {
    
}