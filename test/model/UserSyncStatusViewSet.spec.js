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
    describe('UserSyncStatusViewSet', function() {
      beforeEach(function() {
        instance = new KolibriApi.UserSyncStatusViewSet();
      });

      it('should create an instance of UserSyncStatusViewSet', function() {
        // TODO: update the code to test UserSyncStatusViewSet
        expect(instance).to.be.a(KolibriApi.UserSyncStatusViewSet);
      });

      it('should have the property queued (base name: "queued")', function() {
        // TODO: update the code to test the property queued
        expect(instance).to.have.property('queued');
        // expect(instance.queued).to.be(expectedValueLiteral);
      });

      it('should have the property user (base name: "user")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

    });
  });

}));