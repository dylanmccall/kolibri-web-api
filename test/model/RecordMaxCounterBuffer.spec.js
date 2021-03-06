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
    describe('RecordMaxCounterBuffer', function() {
      beforeEach(function() {
        instance = new KolibriApi.RecordMaxCounterBuffer();
      });

      it('should create an instance of RecordMaxCounterBuffer', function() {
        // TODO: update the code to test RecordMaxCounterBuffer
        expect(instance).to.be.a(KolibriApi.RecordMaxCounterBuffer);
      });

      it('should have the property transferSession (base name: "transfer_session")', function() {
        // TODO: update the code to test the property transferSession
        expect(instance).to.have.property('transferSession');
        // expect(instance.transferSession).to.be(expectedValueLiteral);
      });

      it('should have the property modelUuid (base name: "model_uuid")', function() {
        // TODO: update the code to test the property modelUuid
        expect(instance).to.have.property('modelUuid');
        // expect(instance.modelUuid).to.be(expectedValueLiteral);
      });

      it('should have the property instanceId (base name: "instance_id")', function() {
        // TODO: update the code to test the property instanceId
        expect(instance).to.have.property('instanceId');
        // expect(instance.instanceId).to.be(expectedValueLiteral);
      });

      it('should have the property counter (base name: "counter")', function() {
        // TODO: update the code to test the property counter
        expect(instance).to.have.property('counter');
        // expect(instance.counter).to.be(expectedValueLiteral);
      });

    });
  });

}));
