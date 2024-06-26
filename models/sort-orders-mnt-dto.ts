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
 * @interface SortOrdersMntDto
 */
export interface SortOrdersMntDto {
    /**
     * Key of Entity to sort
     * @type {string}
     * @memberof SortOrdersMntDto
     */
    'orderBy': string;
    /**
     * Order of sorting
     * @type {string}
     * @memberof SortOrdersMntDto
     */
    'order': SortOrdersMntDtoOrderEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum SortOrdersMntDtoOrderEnum {
    Asc = 'asc',
    Desc = 'desc'
}


