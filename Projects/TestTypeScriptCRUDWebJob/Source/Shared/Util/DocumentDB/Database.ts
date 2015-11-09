/// <reference path="../../../../typings/documentdb/documentdb.d.ts" />
import documentDB = require('documentdb');
import list = require("../Collection/List");
import collection = require("../DocumentDB/Collection");
export class Database {
  private _listCollection:list.List<collection.Collection>;
  private _name:string;//id
  private _identification:string;//rid
  private _timestamp:string;//ts
  private _uRI:string;//self
  private _eTag:string;
  private _collectionsFeed:string;//colls
  private _usersFeed:string;//users
  private _client:documentDB.DocumentClient;
  
  public constructor(
  name:string,
  identification:string,
  timestamp:string,
  uRI:string,
  eTag:string,
  collectionsFeed:string,
  usersFeed:string,
  client:documentDB.DocumentClient){
    this._name=name;
    this._identification=identification;
    this._timestamp=timestamp;
    this._uRI=uRI;
    this._eTag=eTag;
    this._collectionsFeed=collectionsFeed;
    this._usersFeed=usersFeed;
    this._client=client;
  }
  
  public getListCollection(callback){
    this._client.queryCollections(this._uRI,"SELECT * FROM c").toArray(function(error,result){
      if(error){
        console.log("Error:");//TODO: Create an ERROR
				console.log(error);
        throw new Error("Error");
        
      }else{
        this._listCollection = new list.List<collection.Collection>();
        result.forEach(element => {
          var collection=new collection.Collection(element.id,element._rid,element._ts,element._self,element._etag,element._docs,element._sprocs,element._triggers,element._udfs,element._conflicts,element.indexingPolicy,this._client);
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