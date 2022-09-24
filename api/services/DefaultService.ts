/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeviceDelete } from '../models/DeviceDelete';
import type { DevicesList } from '../models/DevicesList';
import type { DeviceUpdateCoordinates } from '../models/DeviceUpdateCoordinates';
import type { DeviceUpdatePosition } from '../models/DeviceUpdatePosition';
import type { EmergencyCreate } from '../models/EmergencyCreate';
import type { EmergencyList } from '../models/EmergencyList';
import type { Question } from '../models/Question';
import type { QuestionBulk } from '../models/QuestionBulk';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { Token } from '../models/Token';
import type { UserDelete } from '../models/UserDelete';
import type { UserRead } from '../models/UserRead';
import type { UuidResponse } from '../models/UuidResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * User Create
     * creates basic user and returnes basic id from the user
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static userCreateUserCreatePost(): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/create',
        });
    }

    /**
     * User Delete
     * deletes requested user
     * @param requestBody
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    public static userDeleteUserDeleteDelete(
        requestBody: UserDelete,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/delete',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * User Read
     * changes role of user to specified
     * @returns UserRead Successful Response
     * @throws ApiError
     */
    public static userReadUserInfoPost(): CancelablePromise<UserRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/info',
        });
    }

    /**
     * User Device Create
     * adds a new device to a user
     * @returns UuidResponse Successful Response
     * @throws ApiError
     */
    public static userDeviceCreateUserDevicePut(): CancelablePromise<UuidResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/device',
        });
    }

    /**
     * User Device Delete
     * removes device from user
     * @param requestBody
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    public static userDeviceDeleteUserDeviceDelete(
        requestBody: DeviceDelete,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/device',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * User Device Update Position
     * updates the position of specified device
     * @param requestBody
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    public static userDeviceUpdatePositionUserDeviceUpdatePost(
        requestBody: DeviceUpdatePosition,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/device/update',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * User Device Read
     * list all devices belonging to this user
     * @returns DevicesList Successful Response
     * @throws ApiError
     */
    public static userDeviceReadUserDeviceListPost(): CancelablePromise<DevicesList> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/device/list',
        });
    }

    /**
     * Emergency Create
     * creates an emergency and taking the coordinates from specified device
     * @param requestBody
     * @returns UuidResponse Successful Response
     * @throws ApiError
     */
    public static emergencyCreateEmergencyCreatePost(
        requestBody: EmergencyCreate,
    ): CancelablePromise<UuidResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/emergency/create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Emergency Terminate
     * termiantes the emergency
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    public static emergencyTerminateEmergencyTerminateDelete(): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/emergency/terminate',
        });
    }

    /**
     * Emergency Update
     * setting severity
     * @returns EmergencyList Successful Response
     * @throws ApiError
     */
    public static emergencyUpdateEmergencyInfoPut(): CancelablePromise<EmergencyList> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/emergency/info',
        });
    }

    /**
     * Emergency Coordinates
     * receiving coordinates of the accident
     * @param requestBody
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    public static emergencyCoordinatesEmergencyCoordinatesPut(
        requestBody: DeviceUpdateCoordinates,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/emergency/coordinates',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Emergency Accept
     * accept helping
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    public static emergencyAcceptEmergencyAcceptPost(): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/emergency/accept',
        });
    }

    /**
     * Emergency Deny
     * deny helping
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    public static emergencyDenyEmergencyDenyPost(): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/emergency/deny',
        });
    }

    /**
     * Emergency Log Single
     * setting one question
     * @param requestBody
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    public static emergencyLogSingleEmergencyLogSinglePut(
        requestBody: Question,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/emergency/log/single',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Emersgency Log Bulk
     * setting multiple questions
     * @param requestBody
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    public static emersgencyLogBulkEmergencyLogBulkPut(
        requestBody: QuestionBulk,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/emergency/log/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Emergency Log Info
     * setting multiple questions
     * @returns QuestionBulk Successful Response
     * @throws ApiError
     */
    public static emergencyLogInfoEmergencyLogGet(): CancelablePromise<QuestionBulk> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/emergency/log',
        });
    }

}
