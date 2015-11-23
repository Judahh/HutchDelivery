/// <reference path="../../../../typings/documentdb/documentdb.d.ts" />
import importDocumentDB = require('documentdb');
import importDatabase  = require('./Database');
import importList = require('../Collection/List');
export class DocumentDB {
  private _listDatabase:importList.List<importDatabase.Database>;
  private _stringEndPoint:string;
  private _stringAuthKey:string;
  private _client:importDocumentDB.DocumentClient;
  
  public constructor(stringEndPoint:string, stringAuthKey:string){
    this._stringEndPoint = stringEndPoint;
    this._stringAuthKey = stringAuthKey;
    this._client = new importDocumentDB.DocumentClient(this._stringEndPoint, {masterKey: this._stringAuthKey});
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
  
  public get stringEndPoint():string{
        return this._stringEndPoint;
  }
  
  public get stringAuthKey():string{
        return this._stringAuthKey;
  }
  
  public get client():importDocumentDB.DocumentClient{
        return this.client;
  }
  
  // public get listDatabase():list.List<database.Database>{
  //       return this._listDatabase;
  // }
}