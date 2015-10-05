/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/assets              ->  index
 */

'use strict';

// Gets a list of Assets
exports.index = function(req, res) {
  res.json([]);
};
