/*jslint indent: 4, nomen:true, white:true */
/*global require, describe:true,it:true */

var expect = require('chai').expect,
    cronshot_local = require('../../index');

describe('cronshot-local middleware', function() {
    it("should error if null is passed as the first argument", function() {
        cronshot_local(null, function(err) {
            expect(err).not.to.equal(null);
        });
    });

    it("should error if options are not passed", function() {
        cronshot_local({}, function(err) {
            expect(err).not.to.equal(null);
        });
    });

    it("should error if the path option is not passed", function() {
        cronshot_local({
            options: {},
        }, function(err) {
            expect(err).not.to.equal(null);
        });
    });

    it("should error if the imageName option is not passed", function() {
        cronshot_local({
            options: {
                path: __dirname
            }
        }, function(err) {
            expect(err).not.to.equal(null);
        });
    });

    it("should error if the local file path does not exist", function() {
        cronshot_local({
            options: {
                path: __dirname,
                imageName: '/../images/notFound.png'
            }
        }, function(err) {
            expect(err).not.to.equal(null);
        });
    });

    it("should error if there is a writesteam error", function(done) {
        cronshot_local({
            options: {
                path: __dirname,
                imageName: '/../images/screenshot.png',
                error: true
            }
        }, function(err) {
            expect(err).not.to.equal(null);
            done();
        });
    });

    it("should succeed if all options and propeties are passed correctly", function(done) {
        cronshot_local({
            options: {
                path: __dirname,
                imageName: '/../images/screenshot.png',
            }
        }, function(err, data) {
            expect(err).to.equal(undefined);
            expect(data.name).to.equal('local');
            done();
        });
    });
});