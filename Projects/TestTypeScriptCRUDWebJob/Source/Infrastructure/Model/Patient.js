var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var importDocumentDB = require('../../Shared/Util/DocumentDB/Document');
var env = require('dotenv').load();
var Patient = (function (_super) {
    __extends(Patient, _super);
    function Patient() {
        _super.apply(this, arguments);
    }
    Patient.prototype.organize = function (element) {
        _super.prototype.organize.call(this, element);
    };
    return Patient;
})(importDocumentDB.Document);
exports.Patient = Patient;
