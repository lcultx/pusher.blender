# pusher.blender

pusher.blender is a module for parsing data from .blend files saved by [Blender](http://www.blender3d.org).  The [file format](http://www.blender.org/development/architecture/blender-file-format/) is described on the blender.org site.

_Note: please encourage further development by providing feedback on this module and how you use it!_

## Examples

In the pusher.blender directory, run the examples:

    $ node examples/example-01.js
    $ node examples/example-02.js
    etc.

The examples demonstrate how to extract data from the .blend file. For example, here's some of the partial output from example-01.js

    Opening file:  data/unitCube-000.blend
    File version:  257
    Mesh at 0x2959559940 total vertices/faces/edges: 8/6/12
    Object:
    { 
      ...
      mat: 4026607364,
      ...   
      totvert: 8,
      totedge: 12,
      totface: 6,
      ...
      loc: [ 5.960464477539063e-8, -1.1920928955078125e-7, 0 ],
      size: [ 1.0000004768371582, 1.0000004768371582, 1 ],
      rot: [ 0, 0, 0 ],
      texflag: 1,
      drawflag: 67,
      smoothresh: 30,
      ... }

The field names in the JSON represent the field names extracted from the Blender SDNA format.  Therefore, using the format documentation you should be able to extract any and all data you need.
      
## Usage

_(Jump straight to the "examples" folder for in the [git repository](https://bitbucket.org/pusherhq/pusher.blender/src/master/examples) for more detailed information on usage of the module.)_

The parser is fairly **low-level**: its goal is to make traversing the [Blender "SDNA" structures](http://www.atmind.nl/blender/blender-sdna.html) easier, not to invent a new intermediate 3D format.  It works by reading in the index of all types, structures, and blocks from the file and providing access methods for those blocks.

The client code still needs to direct the traversal of the blocks of interest.  This is left to the client in order to (a) avoid loading what the client does not need, and (b) avoid enforcing use of some intermediate data structure for 3D point, normals, etc. that might require yet-another format conversion to get to the data format the client code needs.

The examples are the best way to understand the library:

* [Example 01](https://bitbucket.org/pusherhq/pusher.blender/src/master/examples/example-01.js) - read basic mesh info 
* [Example 02](https://bitbucket.org/pusherhq/pusher.blender/src/master/examples/example-02.js) - read positions and normals from a mesh

## Unit Tests

Unit testing uses node-unit.  The standard command ``npm install --dev`` will install the development dependencies.  Then run the tests using:

    npm test

## Benchmarks

## Benchmarks

The benchmarks use ```benchmarkjs``.  Be sure to run ``npm install --dev`` prior to running the benchmarks.

    node benchmark/benchmark.js

## License

Licensed under the MIT license.


