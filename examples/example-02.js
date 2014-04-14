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
/*
    Open the file and convert it to a "Mesh" with an array of floating point
    positions and normals.
 */
function demo(filename)
{
    console.log("Opening file: ", filename);
    var file = blender.open(filename);

    _.each(file.getBlocks("Mesh"), function (block) 
    {
        // Create a custom object to store the data we read in
        var mesh = {};
    
        // Read the blender Mesh block
        var blenderMesh = file.readObject(block.address);
        
        // Read the Mesh's vertices blocks
        var vertices = file.readObjects(blenderMesh.mvert, blenderMesh.totvert);       
        
        // Transform the blender format to our format
        //
        // Note: pusher.blender provides the data directly as it's stored in
        // the .blend file.  For example, .blend stores the normals as 16-bit
        // integers, but we want them in floating point - so we need to do the
        // conversion.
        //
        mesh.vertices = [];
        _.each(vertices, function (v) {
            var vertex = {};
            vertex.position = v.co;
            vertex.normal = [
                v.no[0] / 32767,
                v.no[1] / 32767,
                v.no[2] / 32767,
            ];
            mesh.vertices.push(vertex);
        });

        //
        // Display the mesh data
        //
        var json = JSON.stringify(mesh, null, 2);
        console.log("Mesh JSON\n", json);
    });    
}
    
demo("data/unitCube-000.blend");


