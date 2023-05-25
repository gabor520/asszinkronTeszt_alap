import Statisztika from "../Teszt/statisztikaTeszt.js";
import szemelyek from "adatok.json";



QUnit.module('',function(){

    QUnit.test('Van e no',function(assert) {
        assert.ok("Van e no");
    });

    
    QUnit.test('no-e',function(assert) {
        assert.equal(nem,nő,  "");
    });
    QUnit.test('ferfi-e',function(assert) {
        assert.equal(nem,ffi,);
        
    });
    QUnit.test('egyeb-e',function(assert) {
        assert.equal(nem,nő,);
        assert.equal(nem,ffi);
    });
    let assert = require('assert');
    assert.notEqual(nem, nő, "egyéb vagy ferfi"); 
    assert.notEqual(nem, ffi, "egyeb vagy no"); 
    assert.notEqual(nem, egyéb, "nem egyeb,vagy ferfi vagy no")

});