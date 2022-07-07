'use strict';

const assert = require('assert');
const MyGreeter = require('../src/MyGreeter.js');

describe('MyGreeter.Client', function () {

    describe('Constructor', function () {

        it('should be instantiated', function () {

            const greeter = new MyGreeter.Client();

            assert.ok(greeter instanceof MyGreeter.Client);
        });
    });

    describe('getGreeting', function () {

        it('should return something with length', function () {
            
            const greeter = new MyGreeter.Client();

            assert.equal(greeter.getGreeting().length > 0, true);
        });

        it('should throw an Error with wrong time format', function () {
            

            assert.throws(() => { new MyGreeter.Client({ time: '18' }) }, TypeError)
        });

        it('should return Good evening before 6', function () {
            
            const greeter = new MyGreeter.Client({ time: '1995-12-17T05:59:59' });

            assert.equal(greeter.getGreeting(), 'Good evening');
        });

        it('should return Good morning at 6', function () {
            
            const greeter = new MyGreeter.Client({ time: '1995-12-17T06:00:00' });

            assert.equal(greeter.getGreeting(), 'Good morning');
        });

        it('should return Good morning after 6 and befroe 12', function () {
            
            const greeter = new MyGreeter.Client({ time: '1995-12-17T06:00:01' });

            assert.equal(greeter.getGreeting(), 'Good morning');
        });

        it('should return Good afternoon at 12', function () {
            
            const greeter = new MyGreeter.Client({ time: '1995-12-17T12:00:00' });

            assert.equal(greeter.getGreeting(), 'Good afternoon');
        });

        it('should return Good afternoon after 12', function () {
            
            const greeter = new MyGreeter.Client({ time: '1995-12-17T12:00:01' });

            assert.equal(greeter.getGreeting(), 'Good afternoon');
        });

        it('should return Good evening at 18', function () {
            
            const greeter = new MyGreeter.Client({ time: '1995-12-17T18:00:00' });

            assert.equal(greeter.getGreeting(), 'Good evening');
        });
        
        it('should return Good evening after 18', function () {
            
            const greeter = new MyGreeter.Client({ time: '1995-12-17T18:00:01' });

            assert.equal(greeter.getGreeting(), 'Good evening');
        });
    });
});
