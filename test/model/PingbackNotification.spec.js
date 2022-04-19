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
    describe('PingbackNotification', function() {
      beforeEach(function() {
        instance = new KolibriApi.PingbackNotification();
      });

      it('should create an instance of PingbackNotification', function() {
        // TODO: update the code to test PingbackNotification
        expect(instance).to.be.a(KolibriApi.PingbackNotification);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property versionRange (base name: "version_range")', function() {
        // TODO: update the code to test the property versionRange
        expect(instance).to.have.property('versionRange');
        // expect(instance.versionRange).to.be(expectedValueLiteral);
      });

      it('should have the property timestamp (base name: "timestamp")', function() {
        // TODO: update the code to test the property timestamp
        expect(instance).to.have.property('timestamp');
        // expect(instance.timestamp).to.be(expectedValueLiteral);
      });

      it('should have the property linkUrl (base name: "link_url")', function() {
        // TODO: update the code to test the property linkUrl
        expect(instance).to.have.property('linkUrl');
        // expect(instance.linkUrl).to.be(expectedValueLiteral);
      });

      it('should have the property i18n (base name: "i18n")', function() {
        // TODO: update the code to test the property i18n
        expect(instance).to.have.property('i18n');
        // expect(instance.i18n).to.be(expectedValueLiteral);
      });

    });
  });

}));
