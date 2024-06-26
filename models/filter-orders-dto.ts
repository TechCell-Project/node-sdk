/* tslint:disable */
/* eslint-disable */
/**
 * TechCell RESTful API Documentations
 * The documentations of the TechCell RESTful API
 *
 * The version of the OpenAPI document: 1.0
 * Contact: teams@techcell.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface FilterOrdersDto
 */
export interface FilterOrdersDto {
    /**
     * Search by keyword
     * @type {string}
     * @memberof FilterOrdersDto
     */
    'keyword'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FilterOrdersDto
     */
    'status'?: Array<FilterOrdersDtoStatusEnum>;
}

/**
    * @export
    * @enum {string}
    */
export enum FilterOrdersDtoStatusEnum {
    Pending = 'pending',
    Confirmed = 'confirmed',
    Preparing = 'preparing',
    Prepared = 'prepared',
    Shipping = 'shipping',
    Canceled = 'canceled',
    Failed = 'failed',
    Completed = 'completed'
}


