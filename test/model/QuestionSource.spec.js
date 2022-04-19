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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KolibriApi);
  }
}(this, function(expect, KolibriApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('QuestionSource', function() {
      beforeEach(function() {
        instance = new KolibriApi.QuestionSource();
      });

      it('should create an instance of QuestionSource', function() {
        // TODO: update the code to test QuestionSource
        expect(instance).to.be.a(KolibriApi.QuestionSource);
      });

      it('should have the property exerciseId (base name: "exercise_id")', function() {
        // TODO: update the code to test the property exerciseId
        expect(instance).to.have.property('exerciseId');
        // expect(instance.exerciseId).to.be(expectedValueLiteral);
      });

      it('should have the property questionId (base name: "question_id")', function() {
        // TODO: update the code to test the property questionId
        expect(instance).to.have.property('questionId');
        // expect(instance.questionId).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property counterInExercise (base name: "counter_in_exercise")', function() {
        // TODO: update the code to test the property counterInExercise
        expect(instance).to.have.property('counterInExercise');
        // expect(instance.counterInExercise).to.be(expectedValueLiteral);
      });

    });
  });

}));