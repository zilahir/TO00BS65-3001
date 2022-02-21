/**
 * Defines Custom method types over Express's NextFunction
 *
 * @author Richard Zilahi <zilahi@gmail.com>
 */

import { NextFunction } from 'express';

export interface INext extends NextFunction {}
