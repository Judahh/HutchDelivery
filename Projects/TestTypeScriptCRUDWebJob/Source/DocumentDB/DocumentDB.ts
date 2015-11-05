/// <reference path="../../typings/documentdb/documentdb.d.ts" />
 import account = require("../DocumentDB/Database");
import documentDB = require('documentdb');
var env = require('dotenv').load();
export class DocumentDB {
  private _listDatabase;
  private _endPoint:string;
  private _authKey:string;
  private _client:documentDB.DocumentClient;
  
  public constructor(endPoint?:string, authKey?:string){
    this._endPoint = name|| process.env.AZURE_DOCUMENTDB_ENDPOINT;
    this._authKey = name||process.env.AZURE_DOCUMENTDB_AUTH_KEY;
    this._client = new documentDB.DocumentClient(this._endPoint, {masterKey: this._authKey});
  }
  
  public getListDatabase(callback){
    this._client.queryDatabases("SELECT * FROM d").toArray(function(error,result){
      if(error){
        console.log("Error:");//TODO: Create an ERROR
				console.log(error);
        throw new Error("Error");
      }else{
        //TODO:_listDatabase populate with result
        callback(this._listDatabase);
      }
    });
  }
  
  public get endPoint():string{
        return this._endPoint;
  }
  
  public get authKey():string{
        return this._authKey;
  }
  
  public get client():documentDB.DocumentClient {
        return this.client;
  }
  
  public get listDatabase() {
        return this._listDatabase;
  }
}