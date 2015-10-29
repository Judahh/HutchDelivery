import Account = require("../AzureStorage/Account");
let azure = require('azure-queue-node');
export class Queue {
  private _account:Account.Account;
  private _queueName:string;
  private _queueSvc;
  
  public constructor(account:Account.Account){
    this._account=account;
    
    azure.setDefaultClient({
      accountUrl: this._account.uRL,
      accountName: this._account.name,
      accountKey: this._account.key
    });
    
    this._account=account;
    
    this._queueSvc = azure.getDefaultClient();
  }
  
	public createQueue(queueName?:string):boolean{
      this._queueSvc.createQueue(queueName, true, function(error, result, response){
        if(!error){
          this._queueName=queueName||'appqueue';
          return true;
        }
      });
      return false;
	}
	
	public createMessage(message):boolean{
		this._queueSvc.putMessage(this._queueName, message, function(error, result){
      if(!error){
        return true;
      }
    });
    return false;
	}
  
  public get account() {
        return this._account;
  }
  
  public set account(account:Account.Account) {
      this._account = account;
  }
}