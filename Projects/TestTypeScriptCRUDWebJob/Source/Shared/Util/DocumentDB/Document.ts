/// <reference path="../../../../typings/documentdb/documentdb.d.ts" />
import importDocumentDB = require('documentdb');
export class Document {
  private _stringTimestamp:string;//ts
  private _stringURI:string;//self
  private _stringETag:string;
  private _stringAttachmentsFeed:string;//attachments
  private _client:importDocumentDB.DocumentClient;
  
  public constructor(element, client:importDocumentDB.DocumentClient){
    this.organize(element);
    this._client=client;
  }
  
  protected organize(element){
    this._stringTimestamp=element._ts;
    this._stringURI=element._self;
    this._stringETag=element._etag;
    this._stringAttachmentsFeed=element._attachments;
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
  
  public get stringAttachmentsFeed():string{
        return this._stringAttachmentsFeed;
  }
}