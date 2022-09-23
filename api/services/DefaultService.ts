/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddDevice } from '../models/AddDevice';
import type { Body_user_register_user_login_post } from '../models/Body_user_register_user_login_post';
import type { BulkLog } from '../models/BulkLog';
import type { CreateEmergency } from '../models/CreateEmergency';
import type { DevicesList } from '../models/DevicesList';
import type { EmergencyInfo } from '../models/EmergencyInfo';
import type { EmergencyList } from '../models/EmergencyList';
import type { PromoteUser } from '../models/PromoteUser';
import type { Question } from '../models/Question';
import type { RemoveDevice } from '../models/RemoveDevice';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { Token } from '../models/Token';
import type { UpdatePosition } from '../models/UpdatePosition';
import type { UserDelete } from '../models/UserDelete';
import type { UserInfo } from '../models/UserInfo';
import type { UserRegister } from '../models/UserRegister';
import type { UuidRequest } from '../models/UuidRequest';
import type { UuidResponse } from '../models/UuidResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * User Create
     * creates basic user and returnes basic id from the user
     * @returns UuidResponse Successful Response
     * @throws ApiError
     */
    public static userCreateUserCreatePost(): CancelablePromise<UuidResponse> {
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
     * User Register
     * registeres user
     * @param requestBody
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    public static userRegisterUserRegisterPost(
        requestBody: UserRegister,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * User Register
     * login user
     * @param formData
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static userRegisterUserLoginPost(
        formData: Body_user_register_user_login_post,
    ): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/login',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * User Promote
     * changes role of user to specified
     * @param requestBody
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    public static userPromoteUserPromotePost(
        requestBody: PromoteUser,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/promote',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * User Promote
     * changes role of user to specified
     * @param requestBody
     * @returns UserInfo Successful Response
     * @throws ApiError
     */
    public static userPromoteUserInfoPost(
        requestBody: UuidRequest,
    ): CancelablePromise<UserInfo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/info',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * User Device Add
     * adds a new device to a user
     * @param requestBody
     * @returns UuidResponse Successful Response
     * @throws ApiError
     */
    public static userDeviceAddUserDevicePut(
        requestBody: AddDevice,
    ): CancelablePromise<UuidResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/device',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * User Device Remove
     * removes device from user
     * @param requestBody
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    public static userDeviceRemoveUserDeviceDelete(
        requestBody: RemoveDevice,
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
     * User Device Remove
     * updates the position of specified device
     * @param requestBody
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    public static userDeviceRemoveUserDeviceUpdatePost(
        requestBody: UpdatePosition,
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
     * User Promote
     * list all devices belonging to this user
     * @param requestBody
     * @returns DevicesList Successful Response
     * @throws ApiError
     */
    public static userPromoteUserDeviceListPost(
        requestBody: PromoteUser,
    ): CancelablePromise<DevicesList> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/device/list',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * User Create
     * creates an emergency and taking the coordinates from specified device
     * @param requestBody
     * @returns UuidResponse Successful Response
     * @throws ApiError
     */
    public static userCreateEmergencyCreatePost(
        requestBody: CreateEmergency,
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
     * Coordinates
     * updates the status of an emergency
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    public static coordinatesEmergencyCoordinatesPost(): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/emergency/coordinates',
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
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    public static emergencyUpdateEmergencyUpdatePut(): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/emergency/update',
        });
    }

    /**
     * Emergency Update
     * setting severity
     * @returns EmergencyInfo Successful Response
     * @throws ApiError
     */
    public static emergencyUpdateEmergencyInfoPut(): CancelablePromise<EmergencyInfo> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/emergency/info',
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
     * Emergency Log Single
     * setting multiple questions
     * @param requestBody
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    public static emergencyLogSingleEmergencyLogBulkPut(
        requestBody: BulkLog,
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
     * Emergency Log Single
     * setting multiple questions
     * @returns BulkLog Successful Response
     * @throws ApiError
     */
    public static emergencyLogSingleEmergencyLogGet(): CancelablePromise<BulkLog> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/emergency/log',
        });
    }

    /**
     * Emergency Log Single
     * accept helping
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    public static emergencyLogSingleEmergencyAcceptPost(): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/emergency/accept',
        });
    }

    /**
     * Emergency Log Single
     * deny helping
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    public static emergencyLogSingleEmergencyDenyPost(): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/emergency/deny',
        });
    }

    /**
     * Emergency Log Single
     * actively poll for emergencies
     * @returns EmergencyList Successful Response
     * @throws ApiError
     */
    public static emergencyLogSingleEmergencyPollPost(): CancelablePromise<EmergencyList> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/emergency/poll',
        });
    }

}
