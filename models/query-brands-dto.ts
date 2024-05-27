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
 * @interface QueryBrandsDto
 */
export interface QueryBrandsDto {
    /**
     * 
     * @type {number}
     * @memberof QueryBrandsDto
     */
    'page'?: number;
    /**
     * 
     * @type {number}
     * @memberof QueryBrandsDto
     */
    'limit'?: number;
    /**
     * JSON string of FilterBrandsDto
     * @type {string}
     * @memberof QueryBrandsDto
     */
    'filters'?: string;
    /**
     * JSON string of SortBrandsDto[]
     * @type {string}
     * @memberof QueryBrandsDto
     */
    'sort'?: string;
}
