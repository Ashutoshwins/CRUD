import { Response } from "express";
declare const sendResponse: (res: Response, data?: any, status?: number) => void;
export default sendResponse;
