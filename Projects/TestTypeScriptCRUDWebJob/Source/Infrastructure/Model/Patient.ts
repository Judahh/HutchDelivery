import importDocumentDB  = require('../../Shared/Util/DocumentDB/Document');
var env = require('dotenv').load();

export class Patient extends importDocumentDB.Document{
  protected organize(element){
    super.organize(element);
  }
}