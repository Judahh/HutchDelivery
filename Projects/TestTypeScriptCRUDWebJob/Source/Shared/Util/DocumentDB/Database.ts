/// <reference path="../../../../typings/documentdb/documentdb.d.ts" />
import importDocumentDB = require('documentdb');
import importList = require("../Collection/List");
import importCollection = require("./Collection");
export class Database {
  private _listCollection:importList.List<importCollection.Collection>;
  private _name:string;//id
  private _identification:string;//rid
  private _timestamp:string;//ts
  private _uRI:string;//self
  private _eTag:string;
  private _collectionsFeed:string;//colls
  private _usersFeed:string;//users
  private _client:importDocumentDB.DocumentClient;
  
  public constructor(element,
  client:importDocumentDB.DocumentClient){
    this.organize(element);
    this._client=client;
  }
  
  private organize(element){
    this._name=element.id;
    this._identification=element._rid;
    this._timestamp=element._ts;
    this._uRI=element._self;
    this._eTag=element._etag;
    this._collectionsFeed=element._colls;
    this._usersFeed=element._users;
  }
  
  public getListCollection(callback){
    this._client.queryCollections(this._uRI,"SELECT * FROM c").toArray(function(error,result){
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
        return this._name;
  }
  
  public get identification():string{
        return this._identification;
  }
  
  public get timestamp():string{
        return this._timestamp;
  }
  
  public get uRI():string{
        return this._uRI;
  }
  
  public get eTag():string{
        return this._eTag;
  }
  
  public get collectionsFeed():string{
        return this._collectionsFeed;
  }
  
  public get usersFeed():string{
        return this._usersFeed;
  }
}