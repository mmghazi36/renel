import { AuthSignInReq, AuthSignInResp } from "./models";

export type InvokeType = "auth.SignIn" | "Khar"
export interface Layer{
    'auth.SignIn': {req: AuthSignInReq, res:AuthSignInResp};

}