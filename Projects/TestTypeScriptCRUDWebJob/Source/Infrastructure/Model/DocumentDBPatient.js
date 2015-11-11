var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var importDocumentDB = require('../../Shared/Util/DocumentDB/DocumentDB');
var env = require('dotenv').load();
var DocumentDBPatient = (function (_super) {
    __extends(DocumentDBPatient, _super);
    function DocumentDBPatient(endPoint, authKey) {
        _super.call(this, endPoint || process.env.AZURE_DOCUMENTDB_ENDPOINT, authKey || process.env.AZURE_DOCUMENTDB_AUTH_KEY);
    }
    return DocumentDBPatient;
})(importDocumentDB.DocumentDB);
exports.DocumentDBPatient = DocumentDBPatient;
