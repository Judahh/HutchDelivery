/// <reference path="../../../../typings/documentdb/documentdb.d.ts" />
import importDocumentDB = require('documentdb');
export class Document {
  private _timestamp:string;//ts
  private _uRI:string;//self
  private _eTag:string;
  private _attachmentsFeed:string;//attachments
  private _client:importDocumentDB.DocumentClient;
  
  public constructor(element, client:importDocumentDB.DocumentClient){
    this.organize(element);
    this._client=client;
  }
  
  private organize(element){
    this._timestamp=element._ts;
    this._uRI=element._self;
    this._eTag=element._etag;
    this._attachmentsFeed=element._attachments;
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
  
  public get attachmentsFeed():string{
        return this._attachmentsFeed;
  }
}