import {ArgumentsHost, Catch, ExceptionFilter, HttpStatus, Logger} from "@nestjs/common";
import { Request, Response } from 'express';
import {QueryFailedError} from "typeorm";
@Catch()
export class PostgresFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost){
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        Logger.log('Error Message');
        if (exception.code === '23505') {
            response
                .status(HttpStatus.CONFLICT)
                .json({
                    statusCode: HttpStatus.CONFLICT,
                    timestamp: new Date().toISOString(),
                    path: request.url,
                    message: 'User Already Exists'
                });
        } else {
            return exception;
        }
    }
}
