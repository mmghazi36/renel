import { ReactNode, useLayoutEffect } from "react";

import { useDisclosure, useDidUpdate } from "@/hooks";
import { useBreakpointsContext } from "../breakpoint/context";
import { SidebarContext, SidebarContextValue } from "./context";
import ApiManger from "@/apiManager";

const initialState: SidebarContextValue = {
  isExpanded: true,
  toggle: () => {},
  open: () => {},
  close: () => {},
};

export function SidebarProvider({ children }: { children: ReactNode }) {
  const { xlAndUp, lgAndDown, name } = useBreakpointsContext();

  const [isExpanded, { open, close, toggle }] = useDisclosure(
    initialState.isExpanded && xlAndUp,
  );

  useDidUpdate(() => {
    if (lgAndDown) {
      close();
    }
  }, [name]);

  useLayoutEffect(() => {
    const documentBody = document?.body;
    if (documentBody) {
      if (isExpanded) {
        documentBody.classList.add("is-sidebar-open");
      } else {
        documentBody.classList.remove("is-sidebar-open");
      }
    }
    const api = new ApiManger()
    api.invokeApi("auth.SignIn", {username: "ok"}).then(res=>{

    }).catch();
    
  }, [isExpanded]);

  if (!children) {
    return null;
  }

  return (
    <SidebarContext
      value={{
        isExpanded,
        toggle,
        open,
        close,
      }}
    >
      {children}
    </SidebarContext>
  );
}
