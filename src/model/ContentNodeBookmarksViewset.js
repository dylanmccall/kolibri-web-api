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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KolibriApi) {
      root.KolibriApi = {};
    }
    root.KolibriApi.ContentNodeBookmarksViewset = factory(root.KolibriApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ContentNodeBookmarksViewset model module.
   * @module model/ContentNodeBookmarksViewset
   * @version v0
   */

  /**
   * Constructs a new <code>ContentNodeBookmarksViewset</code>.
   * @alias module:model/ContentNodeBookmarksViewset
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ContentNodeBookmarksViewset</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentNodeBookmarksViewset} obj Optional instance to populate.
   * @return {module:model/ContentNodeBookmarksViewset} The populated <code>ContentNodeBookmarksViewset</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('channel_id'))
        obj.channelId = ApiClient.convertToType(data['channel_id'], 'String');
      if (data.hasOwnProperty('content_id'))
        obj.contentId = ApiClient.convertToType(data['content_id'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} channelId
   */
  exports.prototype.channelId = undefined;

  /**
   * @member {String} contentId
   */
  exports.prototype.contentId = undefined;

  return exports;

}));
