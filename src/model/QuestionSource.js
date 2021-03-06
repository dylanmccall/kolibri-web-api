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
    root.KolibriApi.QuestionSource = factory(root.KolibriApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The QuestionSource model module.
   * @module model/QuestionSource
   * @version v0
   */

  /**
   * Constructs a new <code>QuestionSource</code>.
   * @alias module:model/QuestionSource
   * @class
   * @param exerciseId {String} 
   * @param title {String} 
   * @param counterInExercise {Number} 
   */
  var exports = function(exerciseId, title, counterInExercise) {
    this.exerciseId = exerciseId;
    this.title = title;
    this.counterInExercise = counterInExercise;
  };

  /**
   * Constructs a <code>QuestionSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuestionSource} obj Optional instance to populate.
   * @return {module:model/QuestionSource} The populated <code>QuestionSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('exercise_id'))
        obj.exerciseId = ApiClient.convertToType(data['exercise_id'], 'String');
      if (data.hasOwnProperty('question_id'))
        obj.questionId = ApiClient.convertToType(data['question_id'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('counter_in_exercise'))
        obj.counterInExercise = ApiClient.convertToType(data['counter_in_exercise'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} exerciseId
   */
  exports.prototype.exerciseId = undefined;

  /**
   * @member {String} questionId
   */
  exports.prototype.questionId = undefined;

  /**
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * @member {Number} counterInExercise
   */
  exports.prototype.counterInExercise = undefined;

  return exports;

}));
