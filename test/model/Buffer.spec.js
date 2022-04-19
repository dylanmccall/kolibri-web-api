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
    describe('Buffer', function() {
      beforeEach(function() {
        instance = new KolibriApi.Buffer();
      });

      it('should create an instance of Buffer', function() {
        // TODO: update the code to test Buffer
        expect(instance).to.be.a(KolibriApi.Buffer);
      });

      it('should have the property serialized (base name: "serialized")', function() {
        // TODO: update the code to test the property serialized
        expect(instance).to.have.property('serialized');
        // expect(instance.serialized).to.be(expectedValueLiteral);
      });

      it('should have the property deleted (base name: "deleted")', function() {
        // TODO: update the code to test the property deleted
        expect(instance).to.have.property('deleted');
        // expect(instance.deleted).to.be(expectedValueLiteral);
      });

      it('should have the property lastSavedInstance (base name: "last_saved_instance")', function() {
        // TODO: update the code to test the property lastSavedInstance
        expect(instance).to.have.property('lastSavedInstance');
        // expect(instance.lastSavedInstance).to.be(expectedValueLiteral);
      });

      it('should have the property lastSavedCounter (base name: "last_saved_counter")', function() {
        // TODO: update the code to test the property lastSavedCounter
        expect(instance).to.have.property('lastSavedCounter');
        // expect(instance.lastSavedCounter).to.be(expectedValueLiteral);
      });

      it('should have the property hardDeleted (base name: "hard_deleted")', function() {
        // TODO: update the code to test the property hardDeleted
        expect(instance).to.have.property('hardDeleted');
        // expect(instance.hardDeleted).to.be(expectedValueLiteral);
      });

      it('should have the property partition (base name: "partition")', function() {
        // TODO: update the code to test the property partition
        expect(instance).to.have.property('partition');
        // expect(instance.partition).to.be(expectedValueLiteral);
      });

      it('should have the property sourceId (base name: "source_id")', function() {
        // TODO: update the code to test the property sourceId
        expect(instance).to.have.property('sourceId');
        // expect(instance.sourceId).to.be(expectedValueLiteral);
      });

      it('should have the property modelName (base name: "model_name")', function() {
        // TODO: update the code to test the property modelName
        expect(instance).to.have.property('modelName');
        // expect(instance.modelName).to.be(expectedValueLiteral);
      });

      it('should have the property conflictingSerializedData (base name: "conflicting_serialized_data")', function() {
        // TODO: update the code to test the property conflictingSerializedData
        expect(instance).to.have.property('conflictingSerializedData');
        // expect(instance.conflictingSerializedData).to.be(expectedValueLiteral);
      });

      it('should have the property modelUuid (base name: "model_uuid")', function() {
        // TODO: update the code to test the property modelUuid
        expect(instance).to.have.property('modelUuid');
        // expect(instance.modelUuid).to.be(expectedValueLiteral);
      });

      it('should have the property transferSession (base name: "transfer_session")', function() {
        // TODO: update the code to test the property transferSession
        expect(instance).to.have.property('transferSession');
        // expect(instance.transferSession).to.be(expectedValueLiteral);
      });

      it('should have the property profile (base name: "profile")', function() {
        // TODO: update the code to test the property profile
        expect(instance).to.have.property('profile');
        // expect(instance.profile).to.be(expectedValueLiteral);
      });

      it('should have the property rmcbList (base name: "rmcb_list")', function() {
        // TODO: update the code to test the property rmcbList
        expect(instance).to.have.property('rmcbList');
        // expect(instance.rmcbList).to.be(expectedValueLiteral);
      });

      it('should have the property selfRefFk (base name: "_self_ref_fk")', function() {
        // TODO: update the code to test the property selfRefFk
        expect(instance).to.have.property('selfRefFk');
        // expect(instance.selfRefFk).to.be(expectedValueLiteral);
      });

    });
  });

}));