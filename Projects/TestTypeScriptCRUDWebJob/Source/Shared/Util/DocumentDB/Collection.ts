/// <reference path="../../../../typings/documentdb/documentdb.d.ts" />
import importDocumentDB = require('documentdb');
import importList = require("../Collection/List");
import importDocument = require("./Document");
export class Collection {
  private _listDocument:importList.List<importDocument.Document>;
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
  private _client:importDocumentDB.DocumentClient;
  
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
  client:importDocumentDB.DocumentClient){
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
        this._listDocument = new importList.List<importDocument.Document>();
        result.forEach(element => {
          var document=new document.Document(element._ts,element._self,element._etag,element._attachments,this._client);
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
  
  public get documentsFeed():string{
        return this._documentsFeed;
  }
  
  public get storedProceduresFeed():string{
        return this._storedProceduresFeed;
  }
  
  public get triggersFeed():string{
        return this._triggersFeed;
  }
  
  public get userDefinedFunctionsFeed():string{
        return this._userDefinedFunctionsFeed
  }
  
  public get conflictsFeed():string{
        return this._conflictsFeed;
  }
  
  public get indexingPolicy():string{
        return this._indexingPolicy;
  }
}