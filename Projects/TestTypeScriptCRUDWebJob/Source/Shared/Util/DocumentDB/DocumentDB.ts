/// <reference path="../../../../typings/documentdb/documentdb.d.ts" />
import importDocumentDB = require('documentdb');
import importDatabase  = require('./Database');
import importList = require('../Collection/List');

var env = require('dotenv').load();
export class DocumentDB {
  private _listDatabase:importList.List<importDatabase.Database>;
  private _endPoint:string;
  private _authKey:string;
  private _client:importDocumentDB.DocumentClient;
  
  public constructor(endPoint?:string, authKey?:string){
    this._endPoint = endPoint|| process.env.AZURE_DOCUMENTDB_ENDPOINT;
    this._authKey = authKey||process.env.AZURE_DOCUMENTDB_AUTH_KEY;
    this._client = new importDocumentDB.DocumentClient(this._endPoint, {masterKey: this._authKey});
  }
  
  public getListDatabase(callback){
    this._client.queryDatabases("SELECT * FROM d").toArray(function(error,result){
      if(error){
        console.log("Error:");//TODO: Create an ERROR
				console.log(error);
        throw new Error("Error");
      }else{
        this._listDatabase = new importList.List<importDatabase.Database>();
        result.forEach(element => {
          var database=new importDatabase.Database(element,this._client);
					this._listDatabase.add(database);
				});
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
  
  public get client():importDocumentDB.DocumentClient{
        return this.client;
  }
  
  // public get listDatabase():list.List<database.Database>{
  //       return this._listDatabase;
  // }
}