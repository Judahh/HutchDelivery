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
  
  public constructor(element, client:importDocumentDB.DocumentClient){
    this.organize(element);
    this._client=client;
  }
  
  private organize(element){
    this._name=element.id;
    this._identification=element._rid;
    this._timestamp=element._ts;
    this._uRI=element._self;
    this._eTag=element._etag;
    this._documentsFeed=element._docs;
    this._storedProceduresFeed=element._sprocs;
    this._triggersFeed=element._triggers;
    this._userDefinedFunctionsFeed=element._udfs;
    this._conflictsFeed=element._conflicts;
    this._indexingPolicy=element.indexingPolicy;
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
          var document=new document.Document(element,this._client);
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