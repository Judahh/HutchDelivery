/// <reference path="../../../../typings/documentdb/documentdb.d.ts" />
import importDocumentDB = require('documentdb');
import importList = require("../Collection/List");
import importCollection = require("./Collection");
export class Database {
  private _listCollection:importList.List<importCollection.Collection>;
  private _stringName:string;//id
  private _stringIdentification:string;//rid
  private _stringTimestamp:string;//ts
  private _stringURI:string;//self
  private _stringETag:string;
  private _stringCollectionsFeed:string;//colls
  private _stringUsersFeed:string;//users
  private _client:importDocumentDB.DocumentClient;
  
  public constructor(element,
  client:importDocumentDB.DocumentClient){
    this.organize(element);
    this._client=client;
  }
  
  private organize(element){
    this._stringName=element.id;
    this._stringIdentification=element._rid;
    this._stringTimestamp=element._ts;
    this._stringURI=element._self;
    this._stringETag=element._etag;
    this._stringCollectionsFeed=element._colls;
    this._stringUsersFeed=element._users;
  }
  
  public getListCollection(callback){
    this._client.queryCollections(this._stringURI,"SELECT * FROM c").toArray(function(error,result){
      if(error){
        console.log("Error:");//TODO: Create an ERROR
				console.log(error);
        throw new Error("Error");
      }else{
        this._listCollection = new importList.List<importCollection.Collection>();
        result.forEach(element => {
          var collection=new collection.Collection(element,this._client);
					this._listCollection.add(collection);
				});
        callback(this._listCollection);
      }
    });
  }
  
  // public get listCollection():list.List<collection.Collection>{
  //       return this._listCollection;
  // }
  
  public get name():string{
        return this._stringName;
  }
  
  public get identification():string{
        return this._stringIdentification;
  }
  
  public get timestamp():string{
        return this._stringTimestamp;
  }
  
  public get uRI():string{
        return this._stringURI;
  }
  
  public get eTag():string{
        return this._stringETag;
  }
  
  public get collectionsFeed():string{
        return this._stringCollectionsFeed;
  }
  
  public get usersFeed():string{
        return this._stringUsersFeed;
  }
}