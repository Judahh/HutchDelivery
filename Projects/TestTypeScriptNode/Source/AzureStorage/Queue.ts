import Account = require("../AzureStorage/Account");
// let envs = require('envs');
// let process = require('process')
// let azure = require('azure-queue-node');
require('dotenv').load();
let azure = require('azure-storage');
export class Queue {
  private _account:Account.Account;
  private _name:string;
  private _queueService;
  private _error:boolean;
  
  public constructor(account:Account.Account){
    this._error=true;
    this._account=account;
    this._queueService = azure.createQueueService();
  }
  
  public createQueue(name?:string){
    this._name=name;
    this._queueService.createQueueIfNotExists(this._name, true, function(error, result, response){
      this._name="error";
      if(!error){
        // return true;
      }
      this._error=error;
    });
  }
  
  public createMessage(message){
    this._queueService.createMessage(this._name, message, function(error, result){
      if(!error){
        // return true;
      }
      this._error=error;
    });
  }
  
  public get error():boolean {
        return this._error;
  }
  
  public get name():string {
        return this._name;
  }
  
  public get account() {
        return this._account;
  }
  
  public set account(account:Account.Account) {
      this._account = account;
  }
}