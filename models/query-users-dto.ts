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
 * @interface QueryUsersDto
 */
export interface QueryUsersDto {
    /**
     * 
     * @type {number}
     * @memberof QueryUsersDto
     */
    'page'?: number;
    /**
     * 
     * @type {number}
     * @memberof QueryUsersDto
     */
    'limit'?: number;
    /**
     * JSON string of FilterUserDto
     * @type {string}
     * @memberof QueryUsersDto
     */
    'filters'?: string;
    /**
     * JSON string of SortUserDto[]
     * @type {string}
     * @memberof QueryUsersDto
     */
    'sort'?: string;
}
