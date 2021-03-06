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
    describe('PublicFacilityUser', function() {
      beforeEach(function() {
        instance = new KolibriApi.PublicFacilityUser();
      });

      it('should create an instance of PublicFacilityUser', function() {
        // TODO: update the code to test PublicFacilityUser
        expect(instance).to.be.a(KolibriApi.PublicFacilityUser);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property username (base name: "username")', function() {
        // TODO: update the code to test the property username
        expect(instance).to.have.property('username');
        // expect(instance.username).to.be(expectedValueLiteral);
      });

      it('should have the property fullName (base name: "full_name")', function() {
        // TODO: update the code to test the property fullName
        expect(instance).to.have.property('fullName');
        // expect(instance.fullName).to.be(expectedValueLiteral);
      });

      it('should have the property facility (base name: "facility")', function() {
        // TODO: update the code to test the property facility
        expect(instance).to.have.property('facility');
        // expect(instance.facility).to.be(expectedValueLiteral);
      });

      it('should have the property roles (base name: "roles")', function() {
        // TODO: update the code to test the property roles
        expect(instance).to.have.property('roles');
        // expect(instance.roles).to.be(expectedValueLiteral);
      });

      it('should have the property isSuperuser (base name: "is_superuser")', function() {
        // TODO: update the code to test the property isSuperuser
        expect(instance).to.have.property('isSuperuser');
        // expect(instance.isSuperuser).to.be(expectedValueLiteral);
      });

    });
  });

}));
