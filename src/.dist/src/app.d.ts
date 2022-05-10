import { Application } from "express";
export default class App {
    app: Application;
    port: number;
    constructor(port: number);
    private connectToMongo;
    private initializeMiddlewares;
    private connectToRoute;
    listen(): void;
}
