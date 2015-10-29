export class Account {
  private _name:string;
  private _key:string;
  private _uRL:string;
  
  public constructor(name?:string, key?:string, uRL?:string){
    this._name=name||'iviaq';
    this._key=key||'2u8JLG0pkaUjmy287vE5Ldi+3klWLiRrJfaM+Wy3GTy5G4iwdp9esj4zUh8EX7Hc5RP0d0ao/7DAunRpOVkDcA==';
    this._uRL=uRL||'http://'+this._name+'.queue.core.windows.net/';
  }
  
  public get name():string {
        return this._name;
  }
  
  public set accountName(name:string) {
      this._name = name;
  }
  
  public get key():string {
        return this._key;
  }
  
  public set key(key:string) {
      this._key = key;
  }
  
  public get uRL():string {
        return this._uRL;
  }
  
  public set uRL(uRL:string) {
      this._uRL = uRL;
  }
}