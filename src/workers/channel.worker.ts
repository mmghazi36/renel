import { Message } from "@/app/pages/components/notification/Message";

self.onmessage = (event)=>{
    // if(event.data.type !== "CONNECT") return;
    const port = event.ports[0]
    port.onmessage= (MessageEvent) =>{
        console.log("worker recived" , MessageEvent.data);
        port.postMessage({
            type: "RESP",
            message: `hello react ${MessageEvent.data}`
        })
    }
    console.log('shod vasl')
}
export {};