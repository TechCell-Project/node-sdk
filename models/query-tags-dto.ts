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
 * @interface QueryTagsDto
 */
export interface QueryTagsDto {
    /**
     * 
     * @type {number}
     * @memberof QueryTagsDto
     */
    'page'?: number;
    /**
     * 
     * @type {number}
     * @memberof QueryTagsDto
     */
    'limit'?: number;
    /**
     * JSON string of FilterTagDto
     * @type {string}
     * @memberof QueryTagsDto
     */
    'filters'?: string;
    /**
     * JSON string of SortTagDto[]
     * @type {string}
     * @memberof QueryTagsDto
     */
    'sort'?: string;
}

