/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Status } from './Status';

export type EmergencyBase = {
    uuid: string;
    status: Status;
    latitude: number;
    longitude: number;
    created_at: string;
};

