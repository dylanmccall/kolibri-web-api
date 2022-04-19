/*
 * Kolibri API
 * Kolibri Swagger API
 *
 * OpenAPI spec version: v0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AttemptLogViewSet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AttemptLogViewSet'));
  } else {
    // Browser globals (root is window)
    if (!root.KolibriApi) {
      root.KolibriApi = {};
    }
    root.KolibriApi.InlineResponse2005 = factory(root.KolibriApi.ApiClient, root.KolibriApi.AttemptLogViewSet);
  }
}(this, function(ApiClient, AttemptLogViewSet) {
  'use strict';

  /**
   * The InlineResponse2005 model module.
   * @module model/InlineResponse2005
   * @version v0
   */

  /**
   * Constructs a new <code>InlineResponse2005</code>.
   * @alias module:model/InlineResponse2005
   * @class
   * @param count {Number} 
   * @param results {Array.<module:model/AttemptLogViewSet>} 
   */
  var exports = function(count, results) {
    this.count = count;
    this.results = results;
  };

  /**
   * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2005} obj Optional instance to populate.
   * @return {module:model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
      if (data.hasOwnProperty('next'))
        obj.next = ApiClient.convertToType(data['next'], 'String');
      if (data.hasOwnProperty('previous'))
        obj.previous = ApiClient.convertToType(data['previous'], 'String');
      if (data.hasOwnProperty('results'))
        obj.results = ApiClient.convertToType(data['results'], [AttemptLogViewSet]);
    }
    return obj;
  }

  /**
   * @member {Number} count
   */
  exports.prototype.count = undefined;

  /**
   * @member {String} next
   */
  exports.prototype.next = undefined;

  /**
   * @member {String} previous
   */
  exports.prototype.previous = undefined;

  /**
   * @member {Array.<module:model/AttemptLogViewSet>} results
   */
  exports.prototype.results = undefined;

  return exports;

}));
