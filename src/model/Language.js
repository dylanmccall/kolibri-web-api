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
    root.KolibriApi.Language = factory(root.KolibriApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Language model module.
   * @module model/Language
   * @version v0
   */

  /**
   * Constructs a new <code>Language</code>.
   * @alias module:model/Language
   * @class
   * @param id {String} 
   * @param langCode {String} 
   * @param langSubcode {String} 
   */
  var exports = function(id, langCode, langSubcode) {
    this.id = id;
    this.langCode = langCode;
    this.langSubcode = langSubcode;
  };

  /**
   * Constructs a <code>Language</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Language} obj Optional instance to populate.
   * @return {module:model/Language} The populated <code>Language</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('lang_code'))
        obj.langCode = ApiClient.convertToType(data['lang_code'], 'String');
      if (data.hasOwnProperty('lang_subcode'))
        obj.langSubcode = ApiClient.convertToType(data['lang_subcode'], 'String');
      if (data.hasOwnProperty('lang_name'))
        obj.langName = ApiClient.convertToType(data['lang_name'], 'String');
      if (data.hasOwnProperty('lang_direction'))
        obj.langDirection = ApiClient.convertToType(data['lang_direction'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} langCode
   */
  exports.prototype.langCode = undefined;

  /**
   * @member {String} langSubcode
   */
  exports.prototype.langSubcode = undefined;

  /**
   * @member {String} langName
   */
  exports.prototype.langName = undefined;

  /**
   * @member {module:model/Language.LangDirectionEnum} langDirection
   */
  exports.prototype.langDirection = undefined;


  /**
   * Allowed values for the <code>langDirection</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LangDirectionEnum = {
    /**
     * value: "ltr"
     * @const
     */
    ltr: "ltr",

    /**
     * value: "rtl"
     * @const
     */
    rtl: "rtl"
  };

  return exports;

}));
