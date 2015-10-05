/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/bootcamps              ->  index
 */

'use strict';

// Gets a list of Bootcamps
exports.index = function(req, res) {
  res.json([]);
};
