import { InvokeType } from "./layers";

class ApiManger{
    pendingTasks: any = {};
    task_id: number = 0;
    createTask(name:InvokeType, promise: Promise<any>, data: any){
        this.task_id++;
        const task: any = {
            id: this.task_id,
            promise: promise,
            name:name,
            payload:{
                apiInvoke: name,
                id: this.task_id,
                data: data
            }
        }
        return task;
    }
    invokeApi(name:InvokeType, data: any): Promise<any>{
        
        const promise = new Promise<any>((resolve, reject)=>{
            
        })        
        const task = this.createTask(name, promise, data);
        this.pendingTasks[this.task_id] = task;

        //this.postMessage(task.payload);
        return promise;
    }
}

export default ApiManger;