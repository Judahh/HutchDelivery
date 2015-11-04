var env = require('dotenv').load();
export class Account {
  private _name:string;
  private _key:string;
  private _uRL:string;
  
  public constructor(name?:string, key?:string, uRL?:string){
    this._name=name||process.env.AZURE_STORAGE_ACCOUNT;
    this._key=key||process.env.AZURE_STORAGE_ACCESS_KEY;
    this._uRL=uRL||'https://'+this._name+'.queue.core.windows.net/';
  }
  
  public get name():string {
        return this._name;
  }
  
  public set accountName(name:string) {
      this._name = name;
  }
  
  public get key():string {
        return this._key;
  }
  
  public set key(key:string) {
      this._key = key;
  }
  
  public get uRL():string {
        return this._uRL;
  }
  
  public set uRL(uRL:string) {
      this._uRL = uRL;
  }
}