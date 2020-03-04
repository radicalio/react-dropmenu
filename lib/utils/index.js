"use strict";

exports.__esModule = true;
exports.utils = undefined;

var _utils = require("./utils");

var _coordTools = require("./coord-tools");

var utils = exports.utils = { possiblyActivate: _utils.possiblyActivate, activate: _utils.activate, genCoords: _utils.genCoords, calcSlope: _utils.calcSlope, dismissTimeout: _utils.dismissTimeout, getActivationDelay: _utils.getActivationDelay, isOutOfViewport: _coordTools.isOutOfViewport };

exports.default = utils;