import account = require("../AzureStorage/Account");
let azure = require('azure-storage');
var env = require('dotenv').load();
export class Queue {
  private _account:account.Account;
  private _name:string;
  private _queueService;
  
  public constructor(account:account.Account){
    this._queueService = azure.createQueueService();
    this._account=account;
  }
  
  public createQueue(name?:string){
    this._name=name||process.env.AZURE_STORAGE_QUEUE;
    this._queueService.createQueueIfNotExists(this._name, true, function(error){
      if(error){
        throw new Error(error);
      }
    });
  }
  
  public createMessage(message){
    this._queueService.createMessage(this._name, message, function(error){
      if(error){
        throw new Error(error);
      }
    });
  }
  
  public getMessages(callback){
    this._queueService.getMessages(this._name, function(error, result){
      if(error){
        throw new Error(error);
      }else{
        callback(result);
      }
    });
  }
  
  public deleteMessage(message){
    this._queueService.deleteMessage(this._name, message.messageid, message.popreceipt, function(error, response){
      if(error){
        throw new Error(error);
      }
    });
  }
  
  public get queueService(){
        return this._queueService;
  }
  
  public get name():string {
        return this._name;
  }
  
  public get account() {
        return this._account;
  }
  
  public set account(account:account.Account) {
      this._account = account;
  }
}