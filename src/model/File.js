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
    define(['ApiClient', 'model/Language'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Language'));
  } else {
    // Browser globals (root is window)
    if (!root.KolibriApi) {
      root.KolibriApi = {};
    }
    root.KolibriApi.File = factory(root.KolibriApi.ApiClient, root.KolibriApi.Language);
  }
}(this, function(ApiClient, Language) {
  'use strict';

  /**
   * The File model module.
   * @module model/File
   * @version v0
   */

  /**
   * Constructs a new <code>File</code>.
   * @alias module:model/File
   * @class
   * @param id {String} 
   * @param available {Boolean} 
   * @param checksum {String} 
   * @param lang {module:model/Language} 
   */
  var exports = function(id, available, checksum, lang) {
    this.id = id;
    this.available = available;
    this.checksum = checksum;
    this.lang = lang;
  };

  /**
   * Constructs a <code>File</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/File} obj Optional instance to populate.
   * @return {module:model/File} The populated <code>File</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('storage_url'))
        obj.storageUrl = ApiClient.convertToType(data['storage_url'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('priority'))
        obj.priority = ApiClient.convertToType(data['priority'], 'Number');
      if (data.hasOwnProperty('available'))
        obj.available = ApiClient.convertToType(data['available'], 'Boolean');
      if (data.hasOwnProperty('file_size'))
        obj.fileSize = ApiClient.convertToType(data['file_size'], 'String');
      if (data.hasOwnProperty('extension'))
        obj.extension = ApiClient.convertToType(data['extension'], 'String');
      if (data.hasOwnProperty('checksum'))
        obj.checksum = ApiClient.convertToType(data['checksum'], 'String');
      if (data.hasOwnProperty('preset'))
        obj.preset = ApiClient.convertToType(data['preset'], 'String');
      if (data.hasOwnProperty('lang'))
        obj.lang = Language.constructFromObject(data['lang']);
      if (data.hasOwnProperty('supplementary'))
        obj.supplementary = ApiClient.convertToType(data['supplementary'], 'Boolean');
      if (data.hasOwnProperty('thumbnail'))
        obj.thumbnail = ApiClient.convertToType(data['thumbnail'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {String} storageUrl
   */
  exports.prototype.storageUrl = undefined;

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} priority
   */
  exports.prototype.priority = undefined;

  /**
   * @member {Boolean} available
   */
  exports.prototype.available = undefined;

  /**
   * @member {String} fileSize
   */
  exports.prototype.fileSize = undefined;

  /**
   * @member {String} extension
   */
  exports.prototype.extension = undefined;

  /**
   * @member {String} checksum
   */
  exports.prototype.checksum = undefined;

  /**
   * @member {module:model/File.PresetEnum} preset
   */
  exports.prototype.preset = undefined;

  /**
   * @member {module:model/Language} lang
   */
  exports.prototype.lang = undefined;

  /**
   * @member {Boolean} supplementary
   */
  exports.prototype.supplementary = undefined;

  /**
   * @member {Boolean} thumbnail
   */
  exports.prototype.thumbnail = undefined;


  /**
   * Allowed values for the <code>preset</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PresetEnum = {
    /**
     * value: "high_res_video"
     * @const
     */
    highResVideo: "high_res_video",

    /**
     * value: "low_res_video"
     * @const
     */
    lowResVideo: "low_res_video",

    /**
     * value: "video_thumbnail"
     * @const
     */
    videoThumbnail: "video_thumbnail",

    /**
     * value: "video_subtitle"
     * @const
     */
    videoSubtitle: "video_subtitle",

    /**
     * value: "video_dependency"
     * @const
     */
    videoDependency: "video_dependency",

    /**
     * value: "audio"
     * @const
     */
    audio: "audio",

    /**
     * value: "audio_thumbnail"
     * @const
     */
    audioThumbnail: "audio_thumbnail",

    /**
     * value: "audio_dependency"
     * @const
     */
    audioDependency: "audio_dependency",

    /**
     * value: "document"
     * @const
     */
    document: "document",

    /**
     * value: "epub"
     * @const
     */
    epub: "epub",

    /**
     * value: "document_thumbnail"
     * @const
     */
    documentThumbnail: "document_thumbnail",

    /**
     * value: "exercise"
     * @const
     */
    exercise: "exercise",

    /**
     * value: "exercise_thumbnail"
     * @const
     */
    exerciseThumbnail: "exercise_thumbnail",

    /**
     * value: "exercise_image"
     * @const
     */
    exerciseImage: "exercise_image",

    /**
     * value: "exercise_graphie"
     * @const
     */
    exerciseGraphie: "exercise_graphie",

    /**
     * value: "channel_thumbnail"
     * @const
     */
    channelThumbnail: "channel_thumbnail",

    /**
     * value: "topic_thumbnail"
     * @const
     */
    topicThumbnail: "topic_thumbnail",

    /**
     * value: "html5_zip"
     * @const
     */
    html5Zip: "html5_zip",

    /**
     * value: "html5_dependency"
     * @const
     */
    html5Dependency: "html5_dependency",

    /**
     * value: "html5_thumbnail"
     * @const
     */
    html5Thumbnail: "html5_thumbnail",

    /**
     * value: "h5p"
     * @const
     */
    h5p: "h5p",

    /**
     * value: "h5p_thumbnail"
     * @const
     */
    h5pThumbnail: "h5p_thumbnail",

    /**
     * value: "zim"
     * @const
     */
    zim: "zim",

    /**
     * value: "zim_thumbnail"
     * @const
     */
    zimThumbnail: "zim_thumbnail",

    /**
     * value: "qti"
     * @const
     */
    qti: "qti",

    /**
     * value: "qti_thumbnail"
     * @const
     */
    qtiThumbnail: "qti_thumbnail",

    /**
     * value: "slideshow_image"
     * @const
     */
    slideshowImage: "slideshow_image",

    /**
     * value: "slideshow_thumbnail"
     * @const
     */
    slideshowThumbnail: "slideshow_thumbnail",

    /**
     * value: "slideshow_manifest"
     * @const
     */
    slideshowManifest: "slideshow_manifest"
  };

  return exports;

}));