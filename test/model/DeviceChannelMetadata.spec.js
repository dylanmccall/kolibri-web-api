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
    describe('DeviceChannelMetadata', function() {
      beforeEach(function() {
        instance = new KolibriApi.DeviceChannelMetadata();
      });

      it('should create an instance of DeviceChannelMetadata', function() {
        // TODO: update the code to test DeviceChannelMetadata
        expect(instance).to.be.a(KolibriApi.DeviceChannelMetadata);
      });

      it('should have the property author (base name: "author")', function() {
        // TODO: update the code to test the property author
        expect(instance).to.have.property('author');
        // expect(instance.author).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property tagline (base name: "tagline")', function() {
        // TODO: update the code to test the property tagline
        expect(instance).to.have.property('tagline');
        // expect(instance.tagline).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property lastUpdated (base name: "last_updated")', function() {
        // TODO: update the code to test the property lastUpdated
        expect(instance).to.have.property('lastUpdated');
        // expect(instance.lastUpdated).to.be(expectedValueLiteral);
      });

      it('should have the property langCode (base name: "lang_code")', function() {
        // TODO: update the code to test the property langCode
        expect(instance).to.have.property('langCode');
        // expect(instance.langCode).to.be(expectedValueLiteral);
      });

      it('should have the property langName (base name: "lang_name")', function() {
        // TODO: update the code to test the property langName
        expect(instance).to.have.property('langName');
        // expect(instance.langName).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property root (base name: "root")', function() {
        // TODO: update the code to test the property root
        expect(instance).to.have.property('root');
        // expect(instance.root).to.be(expectedValueLiteral);
      });

      it('should have the property thumbnail (base name: "thumbnail")', function() {
        // TODO: update the code to test the property thumbnail
        expect(instance).to.have.property('thumbnail');
        // expect(instance.thumbnail).to.be(expectedValueLiteral);
      });

      it('should have the property version (base name: "version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

      it('should have the property available (base name: "available")', function() {
        // TODO: update the code to test the property available
        expect(instance).to.have.property('available');
        // expect(instance.available).to.be(expectedValueLiteral);
      });

      it('should have the property numCoachContents (base name: "num_coach_contents")', function() {
        // TODO: update the code to test the property numCoachContents
        expect(instance).to.have.property('numCoachContents');
        // expect(instance.numCoachContents).to.be(expectedValueLiteral);
      });

      it('should have the property _public (base name: "public")', function() {
        // TODO: update the code to test the property _public
        expect(instance).to.have.property('_public');
        // expect(instance._public).to.be(expectedValueLiteral);
      });

    });
  });

}));
