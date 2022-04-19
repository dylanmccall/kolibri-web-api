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
    describe('PublicFacility', function() {
      beforeEach(function() {
        instance = new KolibriApi.PublicFacility();
      });

      it('should create an instance of PublicFacility', function() {
        // TODO: update the code to test PublicFacility
        expect(instance).to.be.a(KolibriApi.PublicFacility);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property dataset (base name: "dataset")', function() {
        // TODO: update the code to test the property dataset
        expect(instance).to.have.property('dataset');
        // expect(instance.dataset).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property learnerCanLoginWithNoPassword (base name: "learner_can_login_with_no_password")', function() {
        // TODO: update the code to test the property learnerCanLoginWithNoPassword
        expect(instance).to.have.property('learnerCanLoginWithNoPassword');
        // expect(instance.learnerCanLoginWithNoPassword).to.be(expectedValueLiteral);
      });

    });
  });

}));