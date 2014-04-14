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

function demo(filename)
{
    console.log("Opening file: ", filename);
    var file = blender.open(filename);

    console.log("File version: ", file.header.version);
    
    console.log("Reading meshes...");
    var meshes = file.getBlocks("Mesh");
    _.each(meshes, function (block) 
    {
        var obj = file.readObject(block.address);
        
        console.log("Mesh at 0x" + block.address, 
            "total vertices/faces/edges:",
            obj.totvert + "/" + obj.totface + "/" + obj.totedge);

        console.log("Object:");
        console.log(obj);
    });    
}
    
demo("data/unitCube-000.blend");


