export interface ResultObject{
    message:string;
    status: number;
    messageId: number;
};
export interface AuthSignInReq{
    username: string;
    password:  string 
}
export interface AuthSignInResp{
    token: string;
    username: string
}



