// Import Dependencies
import { RouterProvider } from "react-router";

// Local Imports
import { AuthProvider } from "@/app/contexts/auth/Provider";
import { BreakpointProvider } from "@/app/contexts/breakpoint/Provider";
import { LocaleProvider } from "@/app/contexts/locale/Provider";
import { SidebarProvider } from "@/app/contexts/sidebar/Provider";
import { ThemeProvider } from "@/app/contexts/theme/Provider";
import router from "./app/router/router";

function App() { 

//   const channel: MessageChannel = new MessageChannel();




//   const send = channel.port1
//   const recive = channel.port2

//   const channelworker = new Worker(
//     new URL("./workers/channel.worker.ts" , import.meta.url),
//     {
//         type: "module",
//         name: "channel-worker"
//     }
// )
//  recive.onmessage = (event) =>{
//   if(event.data.type =="READy"){
//     console.log('ready')
//   }
//   if(event.data.type =="RESP"){
//     console.log('response!!!!!')
//   }
//  }

//   channelworker.postMessage({type: "CONNECT"} , [send])
  // recive.start();
  // recive.close()

// setTimeout(() => {
//   console.log("sending data")
//   recive.postMessage({type:"dlsfjlskdjf"})
// }, 2000);
// const api = new ApiManger()
//  api.invokeApi("auth.SignIn", { Password})



  return (

    <AuthProvider>
      <ThemeProvider>
        <LocaleProvider>
          <BreakpointProvider>
            <SidebarProvider>
              <RouterProvider router={router} />
            </SidebarProvider>
          </BreakpointProvider>
        </LocaleProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
