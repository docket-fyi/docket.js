/**
 * Docket API
 * Docket API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: development@docket.fyi
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DocketJs);
  }
}(this, function(expect, DocketJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DocketJs.Event();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Event', function() {
    it('should create an instance of Event', function() {
      // uncomment below and update the code to test Event
      //var instane = new DocketJs.Event();
      //expect(instance).to.be.a(DocketJs.Event);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DocketJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instane = new DocketJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new DocketJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property slug (base name: "slug")', function() {
      // uncomment below and update the code to test the property slug
      //var instane = new DocketJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new DocketJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new DocketJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new DocketJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new DocketJs.Event();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deletedAt")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instane = new DocketJs.Event();
      //expect(instance).to.be();
    });

  });

}));
