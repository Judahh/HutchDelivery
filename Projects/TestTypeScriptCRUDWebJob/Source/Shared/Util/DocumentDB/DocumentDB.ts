/// <reference path="../../../../typings/documentdb/documentdb.d.ts" />
import list = require("../Collection/List");
import database = require("../DocumentDB/Database");
import documentDB = require('documentdb');
var env = require('dotenv').load();
export class DocumentDB {
  private _listDatabase:list.List<database.Database>;
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
        this._listDatabase = new list.List<database.Database>();
        result.forEach(element => {
          var database=new database.Database(element.id,element._rid,element._ts,element._self,element._etag,element._colls,element._users,this._client);
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
  
  public get client():documentDB.DocumentClient{
        return this.client;
  }
  
  // public get listDatabase():list.List<database.Database>{
  //       return this._listDatabase;
  // }
}