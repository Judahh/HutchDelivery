var env = require('dotenv').load();
export class Account {
  private _stringName:string;
  private _stringKey:string;
  private _stringURL:string;
  
  public constructor(stringName?:string, stringKey?:string, stringURL?:string){
    this._stringName=stringName||process.env.AZURE_STORAGE_ACCOUNT;
    this._stringKey=stringKey||process.env.AZURE_STORAGE_ACCESS_KEY;
    this._stringURL=stringURL||'https://'+this._stringName+'.queue.core.windows.net/';
  }
  
  public get stringName():string {
        return this._stringName;
  }
  
  public set accountName(stringName:string) {
      this._stringName = stringName;
  }
  
  public get stringKey():string {
        return this._stringKey;
  }
  
  public set stringKey(stringKey:string) {
      this._stringKey = stringKey;
  }
  
  public get stringURL():string {
        return this._stringURL;
  }
  
  public set stringURL(stringURL:string) {
      this._stringURL = stringURL;
  }
}