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
 * @interface SortSerialNumberDto
 */
export interface SortSerialNumberDto {
    /**
     * Key of Entity to sort
     * @type {string}
     * @memberof SortSerialNumberDto
     */
    'orderBy': string;
    /**
     * Order of sorting
     * @type {string}
     * @memberof SortSerialNumberDto
     */
    'order': SortSerialNumberDtoOrderEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum SortSerialNumberDtoOrderEnum {
    Asc = 'asc',
    Desc = 'desc'
}


