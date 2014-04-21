'use strict';

describe('Directive: sFlowmap', function () {

  // load the directive's module
  beforeEach(module('sFlowmapApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<s-flowmap></s-flowmap>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sFlowmap directive');
  }));
});
