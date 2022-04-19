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
    describe('AttemptLogViewSet', function() {
      beforeEach(function() {
        instance = new KolibriApi.AttemptLogViewSet();
      });

      it('should create an instance of AttemptLogViewSet', function() {
        // TODO: update the code to test AttemptLogViewSet
        expect(instance).to.be.a(KolibriApi.AttemptLogViewSet);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property item (base name: "item")', function() {
        // TODO: update the code to test the property item
        expect(instance).to.have.property('item');
        // expect(instance.item).to.be(expectedValueLiteral);
      });

      it('should have the property startTimestamp (base name: "start_timestamp")', function() {
        // TODO: update the code to test the property startTimestamp
        expect(instance).to.have.property('startTimestamp');
        // expect(instance.startTimestamp).to.be(expectedValueLiteral);
      });

      it('should have the property endTimestamp (base name: "end_timestamp")', function() {
        // TODO: update the code to test the property endTimestamp
        expect(instance).to.have.property('endTimestamp');
        // expect(instance.endTimestamp).to.be(expectedValueLiteral);
      });

      it('should have the property completionTimestamp (base name: "completion_timestamp")', function() {
        // TODO: update the code to test the property completionTimestamp
        expect(instance).to.have.property('completionTimestamp');
        // expect(instance.completionTimestamp).to.be(expectedValueLiteral);
      });

      it('should have the property timeSpent (base name: "time_spent")', function() {
        // TODO: update the code to test the property timeSpent
        expect(instance).to.have.property('timeSpent');
        // expect(instance.timeSpent).to.be(expectedValueLiteral);
      });

      it('should have the property complete (base name: "complete")', function() {
        // TODO: update the code to test the property complete
        expect(instance).to.have.property('complete');
        // expect(instance.complete).to.be(expectedValueLiteral);
      });

      it('should have the property correct (base name: "correct")', function() {
        // TODO: update the code to test the property correct
        expect(instance).to.have.property('correct');
        // expect(instance.correct).to.be(expectedValueLiteral);
      });

      it('should have the property hinted (base name: "hinted")', function() {
        // TODO: update the code to test the property hinted
        expect(instance).to.have.property('hinted');
        // expect(instance.hinted).to.be(expectedValueLiteral);
      });

      it('should have the property answer (base name: "answer")', function() {
        // TODO: update the code to test the property answer
        expect(instance).to.have.property('answer');
        // expect(instance.answer).to.be(expectedValueLiteral);
      });

      it('should have the property simpleAnswer (base name: "simple_answer")', function() {
        // TODO: update the code to test the property simpleAnswer
        expect(instance).to.have.property('simpleAnswer');
        // expect(instance.simpleAnswer).to.be(expectedValueLiteral);
      });

      it('should have the property interactionHistory (base name: "interaction_history")', function() {
        // TODO: update the code to test the property interactionHistory
        expect(instance).to.have.property('interactionHistory');
        // expect(instance.interactionHistory).to.be(expectedValueLiteral);
      });

      it('should have the property user (base name: "user")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

      it('should have the property error (base name: "error")', function() {
        // TODO: update the code to test the property error
        expect(instance).to.have.property('error');
        // expect(instance.error).to.be(expectedValueLiteral);
      });

      it('should have the property masterylog (base name: "masterylog")', function() {
        // TODO: update the code to test the property masterylog
        expect(instance).to.have.property('masterylog');
        // expect(instance.masterylog).to.be(expectedValueLiteral);
      });

      it('should have the property sessionlog (base name: "sessionlog")', function() {
        // TODO: update the code to test the property sessionlog
        expect(instance).to.have.property('sessionlog');
        // expect(instance.sessionlog).to.be(expectedValueLiteral);
      });

    });
  });

}));