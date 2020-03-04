import { possiblyActivate, activate, genCoords, calcSlope, dismissTimeout, getActivationDelay } from "./utils";
import { isOutOfViewport } from "./coord-tools";

export var utils = { possiblyActivate: possiblyActivate, activate: activate, genCoords: genCoords, calcSlope: calcSlope, dismissTimeout: dismissTimeout, getActivationDelay: getActivationDelay, isOutOfViewport: isOutOfViewport };

export default utils;