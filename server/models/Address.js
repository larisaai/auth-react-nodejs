const { Model } = require('objection');

class addresses extends Model {
  static get tableName() {
    return 'addresses';
  }
}

module.exports = addresses;