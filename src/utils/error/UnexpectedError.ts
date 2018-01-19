import { API_ERRORS } from '@app-types/app.errors';
import { ApiError } from './APIError';

export class UnexpectedError extends ApiError {
    constructor() {
        super(API_ERRORS.GENERAL_ERROR);
    }
}