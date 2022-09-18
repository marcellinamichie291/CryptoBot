import EventEmitter from "events";
import { FtxClient } from "./DataClients/FtxClient";

export class MarketDataGrabber {

    client
    eventEmitter

    constructor(client: FtxClient, eventEmitter: EventEmitter){
        this.client = client,
        this.eventEmitter = eventEmitter
    }

    sendPrice(){

        const fetchPrie = async () => {
            try{
                const price = await this.client.ftxGetMarket(false, this.client.priceEndpoint);
                this.eventEmitter.emit('Price', price.result.price);
            }
            catch(err){
                console.log(err);
            }
        }
        
        setInterval(() => {
            fetchPrie();
        },5000)
    }


    
    sendTimeFrameData(lastTime: number){

        let TimeFrame: number = 1000 * parseInt(this.client.windowResolution);
        let timeMills: number
        let timeDiff: number
        
        const routineData = async () => {
            try {
                const getMarketData = await this.client.ftxGetMarket(true, this.client.marketDataEndPoint);
                this.eventEmitter.emit('TimeFrameData', getMarketData);
            }
            catch(err){
                console.log(err)
            }
        
        }

        setInterval(() => {
            timeMills = new Date().getTime();
            timeDiff = timeMills - lastTime
            if(timeDiff > TimeFrame){
                lastTime = lastTime + TimeFrame
                routineData();
            }
        },6000)
    }

}
