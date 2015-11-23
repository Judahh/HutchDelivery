import account = require("../AzureStorage/Account");
let azure = require('azure-storage');
var env = require('dotenv').load();
export class Queue {
  private _account:account.Account;
  private _stringName:string;
  private _queueService;
  
  public constructor(account:account.Account){
    this._queueService = azure.createQueueService();
    this._account=account;
  }
  
  public createQueue(stringName?:string){
    this._stringName=stringName||process.env.AZURE_STORAGE_QUEUE;
    this._queueService.createQueueIfNotExists(this._stringName, true, function(error){
      if(error){
        throw new Error(error);
      }
    });
  }
  
  public createMessage(message){
    this._queueService.createMessage(this._stringName, message, function(error){
      if(error){
        throw new Error(error);
      }
    });
  }
  
  public getMessages(callback){
    this._queueService.getMessages(this._stringName, function(error, result){
      if(error){
        throw new Error(error);
      }else{
        callback(result);
      }
    });
  }
  
  public deleteMessage(message){
    this._queueService.deleteMessage(this._stringName, message.messageid, message.popreceipt, function(error, response){
      if(error){
        throw new Error(error);
      }
    });
  }
  
  public get queueService(){
        return this._queueService;
  }
  
  public get stringName():string {
        return this._stringName;
  }
  
  public get account() {
        return this._account;
  }
  
  public set account(account:account.Account) {
      this._account = account;
  }
}