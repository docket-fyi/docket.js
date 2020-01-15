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
    instance = new DocketJs.InlineResponse2005Data();
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

  describe('InlineResponse2005Data', function() {
    it('should create an instance of InlineResponse2005Data', function() {
      // uncomment below and update the code to test InlineResponse2005Data
      //var instane = new DocketJs.InlineResponse2005Data();
      //expect(instance).to.be.a(DocketJs.InlineResponse2005Data);
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instane = new DocketJs.InlineResponse2005Data();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new DocketJs.InlineResponse2005Data();
      //expect(instance).to.be();
    });

  });

}));
