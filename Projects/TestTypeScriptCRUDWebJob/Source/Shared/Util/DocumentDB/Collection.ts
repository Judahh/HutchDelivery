/// <reference path="../../../../typings/documentdb/documentdb.d.ts" />
import documentDB = require('documentdb');
import list = require("../Collection/List");
import document = require("../DocumentDB/Document");
export class Collection {
  private _listDocument:list.List<document.Document>;
  private _name:string;//id
  private _identification:string;//rid
  private _timestamp:string;//ts
  private _uRI:string;//self
  private _eTag:string;
  private _documentsFeed:string;//docs
  private _storedProceduresFeed:string;//sprocs
  private _triggersFeed:string;//triggers
  private _userDefinedFunctionsFeed:string;//udfs
  private _conflictsFeed:string;//conflicts
  private _indexingPolicy;
  private _client:documentDB.DocumentClient;
  
  public constructor(
  name:string,
  identification:string,
  timestamp:string,
  uRI:string,
  eTag:string,
  documentsFeed:string,
  storedProceduresFeed:string,
  triggersFeed:string,
  userDefinedFunctionsFeed:string,
  conflictsFeed:string,
  indexingPolicy,
  client:documentDB.DocumentClient){
    this._name=name;
    this._identification=identification;
    this._timestamp=timestamp;
    this._uRI=uRI;
    this._eTag=eTag;
    this._documentsFeed=documentsFeed;
    this._storedProceduresFeed=storedProceduresFeed;
    this._triggersFeed=triggersFeed;
    this._userDefinedFunctionsFeed=userDefinedFunctionsFeed;
    this._conflictsFeed=conflictsFeed;
    this._indexingPolicy=indexingPolicy;
    this._client=client;
  }
  
  public getListDocument(callback){
    this._client.queryDocuments(this._uRI,"SELECT * FROM c").toArray(function(error,result){
      if(error){
        console.log("Error:");//TODO: Create an ERROR
				console.log(error);
        throw new Error("Error");
        
      }else{
        this._listDocument = new list.List<document.Document>();
        result.forEach(element => {
          var document=new document.Document(element.id,element._rid,element._ts,element._self,element._etag,element._colls,element._users,this._client);
					this._listCollection.add(document);
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