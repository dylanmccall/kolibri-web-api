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
    define(['ApiClient', 'model/ContentNodeBookmarksViewset'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContentNodeBookmarksViewset'));
  } else {
    // Browser globals (root is window)
    if (!root.KolibriApi) {
      root.KolibriApi = {};
    }
    root.KolibriApi.InlineResponse2001 = factory(root.KolibriApi.ApiClient, root.KolibriApi.ContentNodeBookmarksViewset);
  }
}(this, function(ApiClient, ContentNodeBookmarksViewset) {
  'use strict';

  /**
   * The InlineResponse2001 model module.
   * @module model/InlineResponse2001
   * @version v0
   */

  /**
   * Constructs a new <code>InlineResponse2001</code>.
   * @alias module:model/InlineResponse2001
   * @class
   * @param count {Number} 
   * @param results {Array.<module:model/ContentNodeBookmarksViewset>} 
   */
  var exports = function(count, results) {
    this.count = count;
    this.results = results;
  };

  /**
   * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2001} obj Optional instance to populate.
   * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
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
        obj.results = ApiClient.convertToType(data['results'], [ContentNodeBookmarksViewset]);
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
   * @member {Array.<module:model/ContentNodeBookmarksViewset>} results
   */
  exports.prototype.results = undefined;

  return exports;

}));
