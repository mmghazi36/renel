// const worker = new Worker(
//     new URL("./main.worker.js" , import.meta.url),
//     {
//         type: "module",
//         name: "main-worker"
//     }
//     worker.postMessage({type: "test" , "salam"})
// )

self.onmessage = (event:MessageEvent<string>) => {
    // const {type, message} = event.data
    if(event.data.message == "salam") {
            const msg =  "chetory"
            self.postMessage({
                type: "RESULT",
                value : msg
            })
    }
}

