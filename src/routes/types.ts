import { Request, Response, NextFunction } from "express";

export interface Route {
    method: string,
    path: string,
    controller: (req?: Request, res?: Response, next?: NextFunction) => any,
    label: string
}

export interface MenuItem extends Omit<Route, 'method' | 'controller'> {}

export interface RootRequest extends Route {
    allPath: MenuItem[]
}