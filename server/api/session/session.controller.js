/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/sessions              ->  index
 */

'use strict';

// Gets a list of Sessions
exports.index = function(req, res) {
  res.json([]);
};
