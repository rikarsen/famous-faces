export class FamousFace {
  _id: string;
  name: string;

  constructor (obj?) {
    this._id = obj._id || null;
    this.name = obj.name || '';
  }
}
