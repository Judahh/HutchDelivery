/// <reference path="../../../../typings/documentdb/documentdb.d.ts" />
import importDocumentDB = require('documentdb');
export class Document {
  private _timestamp:string;//ts
  private _uRI:string;//self
  private _eTag:string;
  private _attachmentsFeed:string;//attachments
  private _client:importDocumentDB.DocumentClient;
  
  public constructor(
  timestamp:string,
  uRI:string,
  eTag:string,
  attachmentsFeed:string,
  client:importDocumentDB.DocumentClient){
    this._timestamp=timestamp;
    this._uRI=uRI;
    this._eTag=eTag;
    this._attachmentsFeed=attachmentsFeed;
    this._client=client;
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