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
    describe('NetworkLocation', function() {
      beforeEach(function() {
        instance = new KolibriApi.NetworkLocation();
      });

      it('should create an instance of NetworkLocation', function() {
        // TODO: update the code to test NetworkLocation
        expect(instance).to.be.a(KolibriApi.NetworkLocation);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property available (base name: "available")', function() {
        // TODO: update the code to test the property available
        expect(instance).to.have.property('available');
        // expect(instance.available).to.be(expectedValueLiteral);
      });

      it('should have the property dynamic (base name: "dynamic")', function() {
        // TODO: update the code to test the property dynamic
        expect(instance).to.have.property('dynamic');
        // expect(instance.dynamic).to.be(expectedValueLiteral);
      });

      it('should have the property nickname (base name: "nickname")', function() {
        // TODO: update the code to test the property nickname
        expect(instance).to.have.property('nickname');
        // expect(instance.nickname).to.be(expectedValueLiteral);
      });

      it('should have the property baseUrl (base name: "base_url")', function() {
        // TODO: update the code to test the property baseUrl
        expect(instance).to.have.property('baseUrl');
        // expect(instance.baseUrl).to.be(expectedValueLiteral);
      });

      it('should have the property deviceName (base name: "device_name")', function() {
        // TODO: update the code to test the property deviceName
        expect(instance).to.have.property('deviceName');
        // expect(instance.deviceName).to.be(expectedValueLiteral);
      });

      it('should have the property instanceId (base name: "instance_id")', function() {
        // TODO: update the code to test the property instanceId
        expect(instance).to.have.property('instanceId');
        // expect(instance.instanceId).to.be(expectedValueLiteral);
      });

      it('should have the property added (base name: "added")', function() {
        // TODO: update the code to test the property added
        expect(instance).to.have.property('added');
        // expect(instance.added).to.be(expectedValueLiteral);
      });

      it('should have the property lastAccessed (base name: "last_accessed")', function() {
        // TODO: update the code to test the property lastAccessed
        expect(instance).to.have.property('lastAccessed');
        // expect(instance.lastAccessed).to.be(expectedValueLiteral);
      });

      it('should have the property operatingSystem (base name: "operating_system")', function() {
        // TODO: update the code to test the property operatingSystem
        expect(instance).to.have.property('operatingSystem');
        // expect(instance.operatingSystem).to.be(expectedValueLiteral);
      });

      it('should have the property application (base name: "application")', function() {
        // TODO: update the code to test the property application
        expect(instance).to.have.property('application');
        // expect(instance.application).to.be(expectedValueLiteral);
      });

      it('should have the property kolibriVersion (base name: "kolibri_version")', function() {
        // TODO: update the code to test the property kolibriVersion
        expect(instance).to.have.property('kolibriVersion');
        // expect(instance.kolibriVersion).to.be(expectedValueLiteral);
      });

      it('should have the property subsetOfUsersDevice (base name: "subset_of_users_device")', function() {
        // TODO: update the code to test the property subsetOfUsersDevice
        expect(instance).to.have.property('subsetOfUsersDevice');
        // expect(instance.subsetOfUsersDevice).to.be(expectedValueLiteral);
      });

    });
  });

}));
