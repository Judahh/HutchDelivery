/// <reference path="../../../../typings/documentdb/documentdb.d.ts" />
import importDocumentDB = require('documentdb');
import importList = require("../Collection/List");
import importDocument = require("./Document");
export class Collection {
  private _listDocument:importList.List<importDocument.Document>;
  private _stringName:string;//id
  private _stringIdentification:string;//rid
  private _stringTimestamp:string;//ts
  private _stringURI:string;//self
  private _stringETag:string;
  private _stringDocumentsFeed:string;//docs
  private _stringStoredProceduresFeed:string;//sprocs
  private _stringTriggersFeed:string;//triggers
  private _stringUserDefinedFunctionsFeed:string;//udfs
  private _stringConflictsFeed:string;//conflicts
  private _indexingPolicy;
  private _client:importDocumentDB.DocumentClient;
  
  public constructor(element, client:importDocumentDB.DocumentClient){
    this.organize(element);
    this._client=client;
  }
  
  private organize(element){
    this._stringName=element.id;
    this._stringIdentification=element._rid;
    this._stringTimestamp=element._ts;
    this._stringURI=element._self;
    this._stringETag=element._etag;
    this._stringDocumentsFeed=element._docs;
    this._stringStoredProceduresFeed=element._sprocs;
    this._stringTriggersFeed=element._triggers;
    this._stringUserDefinedFunctionsFeed=element._udfs;
    this._stringConflictsFeed=element._conflicts;
    this._indexingPolicy=element.indexingPolicy;
  }
  
  public getListDocument(callback){
    this._client.queryDocuments(this._stringURI,"SELECT * FROM c").toArray(function(error,result){
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
  
  public get stringName():string{
        return this._stringName;
  }
  
  public get stringIdentification():string{
        return this._stringIdentification;
  }
  
  public get stringTimestamp():string{
        return this._stringTimestamp;
  }
  
  public get stringURI():string{
        return this._stringURI;
  }
  
  public get stringETag():string{
        return this._stringETag;
  }
  
  public get stringDocumentsFeed():string{
        return this._stringDocumentsFeed;
  }
  
  public get stringStoredProceduresFeed():string{
        return this._stringStoredProceduresFeed;
  }
  
  public get stringTriggersFeed():string{
        return this._stringTriggersFeed;
  }
  
  public get stringUserDefinedFunctionsFeed():string{
        return this._stringUserDefinedFunctionsFeed
  }
  
  public get stringConflictsFeed():string{
        return this._stringConflictsFeed;
  }
  
  public get indexingPolicy():string{
        return this._indexingPolicy;
  }
}