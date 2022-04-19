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
    describe('ContentNodeBookmarksViewset', function() {
      beforeEach(function() {
        instance = new KolibriApi.ContentNodeBookmarksViewset();
      });

      it('should create an instance of ContentNodeBookmarksViewset', function() {
        // TODO: update the code to test ContentNodeBookmarksViewset
        expect(instance).to.be.a(KolibriApi.ContentNodeBookmarksViewset);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property channelId (base name: "channel_id")', function() {
        // TODO: update the code to test the property channelId
        expect(instance).to.have.property('channelId');
        // expect(instance.channelId).to.be(expectedValueLiteral);
      });

      it('should have the property contentId (base name: "content_id")', function() {
        // TODO: update the code to test the property contentId
        expect(instance).to.have.property('contentId');
        // expect(instance.contentId).to.be(expectedValueLiteral);
      });

    });
  });

}));
