import importDocumentDB  = require('../../Shared/Util/DocumentDB/DocumentDB');
var env = require('dotenv').load();

export class DocumentDBPatient extends importDocumentDB.DocumentDB{
  public constructor(endPoint?:string, authKey?:string){
	  super(endPoint|| process.env.AZURE_DOCUMENTDB_ENDPOINT, authKey||process.env.AZURE_DOCUMENTDB_AUTH_KEY);
  }
}