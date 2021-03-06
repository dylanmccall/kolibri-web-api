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
    describe('Lesson', function() {
      beforeEach(function() {
        instance = new KolibriApi.Lesson();
      });

      it('should create an instance of Lesson', function() {
        // TODO: update the code to test Lesson
        expect(instance).to.be.a(KolibriApi.Lesson);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property resources (base name: "resources")', function() {
        // TODO: update the code to test the property resources
        expect(instance).to.have.property('resources');
        // expect(instance.resources).to.be(expectedValueLiteral);
      });

      it('should have the property isActive (base name: "is_active")', function() {
        // TODO: update the code to test the property isActive
        expect(instance).to.have.property('isActive');
        // expect(instance.isActive).to.be(expectedValueLiteral);
      });

      it('should have the property collection (base name: "collection")', function() {
        // TODO: update the code to test the property collection
        expect(instance).to.have.property('collection');
        // expect(instance.collection).to.be(expectedValueLiteral);
      });

      it('should have the property lessonAssignments (base name: "lesson_assignments")', function() {
        // TODO: update the code to test the property lessonAssignments
        expect(instance).to.have.property('lessonAssignments');
        // expect(instance.lessonAssignments).to.be(expectedValueLiteral);
      });

      it('should have the property learnerIds (base name: "learner_ids")', function() {
        // TODO: update the code to test the property learnerIds
        expect(instance).to.have.property('learnerIds');
        // expect(instance.learnerIds).to.be(expectedValueLiteral);
      });

      it('should have the property createdBy (base name: "created_by")', function() {
        // TODO: update the code to test the property createdBy
        expect(instance).to.have.property('createdBy');
        // expect(instance.createdBy).to.be(expectedValueLiteral);
      });

    });
  });

}));
