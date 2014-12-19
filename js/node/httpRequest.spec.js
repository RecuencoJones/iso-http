/// <reference path="../../bower_components/dt-node/node.d.ts" />
/// <reference path="../../bower_components/dt-jasmine/jasmine.d.ts" />
var httpRequest = require('./httpRequest');
var TestUtils = require('../test/TestUtils');
describe('node httpRequest()', function () {
    TestUtils.runIsomorphicTests(httpRequest);
    it('rejects a client error', function (done) {
        httpRequest('http://foo.bar.baz/qux', {
            onClientError: function (error) {
                expect(error.message).toEqual('iso-http: getaddrinfo ENOTFOUND');
                done();
            }
        });
    });
});
