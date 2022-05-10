import { Request, Response } from "express";
export declare const UserController: {
    newStudent: (req: Request, res: Response) => Promise<void>;
    StudentByName: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    allStudentDetails: (req: Request, res: Response) => Promise<void>;
    StudentDetailsById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteStudentDetails: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateStudentDetails: (req: Request, res: Response) => Promise<void>;
    loginUser: (req: Request, res: Response) => Promise<void>;
};
