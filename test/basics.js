/* ----------------------------------------------------------------------------
    Copyright (c) 2012 Pusher, Inc.

    MIT License
    
    Permission is hereby granted, free of charge, to any person obtaining a 
    copy of this software and associated documentation files (the "Software"),
    to deal in the Software without restriction, including without limitation 
    the rights to use, copy, modify, merge, publish, distribute, sublicense, 
    and/or sell copies of the Software, and to permit persons to whom the 
    Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in 
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
    DEALINGS IN THE SOFTWARE.
   ----------------------------------------------------------------------------
*/


//-----------------------------------------------------------------------------------//
// Dependencies
//-----------------------------------------------------------------------------------//

var blender  = require("../lib/pusher.blender.js"),
    _        = require("underscore");

//-----------------------------------------------------------------------------------//
// Implementation
//-----------------------------------------------------------------------------------//

exports.basics =
{
        
    "Unit Cube" : function (test)
    {
        var file = blender.open("data/unitCube-000.blend");
        
        test.strictEqual(file.error, undefined);
        test.strictEqual(file.header.littleEndian, true);
        test.strictEqual(file.header.version, "257");
        
        var meshes = file.getBlocks("Mesh");
        test.equal(meshes.length, 1);
        
        _.each(meshes, function (block) 
        {
            var obj = file.readObject(block.address);
            test.equal(obj.totvert, 8);
            test.equal(obj.totface, 6);
            test.equal(obj.totedge, 12);
        });
        
        test.done();
    },
    
    "Unit Sphere" : function (test)
    {
        var file = blender.open("data/unitSphere-000.blend");
        
        var meshes = file.getBlocks("Mesh");
        test.equal(meshes.length, 1);
        
        _.each(meshes, function (block) 
        {
            var obj = file.readObject(block.address);
            test.equal(obj.totvert, 642);
            test.equal(obj.totface, 1280);
            test.equal(obj.totedge, 1920);
        });
        
        test.done();
    },
    
    "Stanford Bunny" : function (test)
    {
        var file = blender.open("data/bunny-000.blend");
        
        var meshes = file.getBlocks("Mesh");
        test.equal(meshes.length, 1);
        
        _.each(meshes, function (block) 
        {
            var obj = file.readObject(block.address);
            test.equal(obj.totvert, 1889);
            test.equal(obj.totface, 3768);
            test.equal(obj.totedge, 5661);
        });
        
        test.done();
    },
    
    "Suzanne" : function (test)
    {
        var file = blender.open("data/suzanne_subdivided.blend");
        
        var meshes = file.getBlocks("Mesh");
        test.equal(meshes.length, 1);
        
        _.each(meshes, function (block) 
        {
            var obj = file.readObject(block.address);
            test.equal(obj.totvert, 7958);
            test.equal(obj.totface, 7872);
            test.equal(obj.totedge, 15828);
        });
        
        test.done();
    },
};



