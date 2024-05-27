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


// May contain unused imports in some cases
// @ts-ignore
import { PriceSchema } from './price-schema';

/**
 * 
 * @export
 * @interface UpdateSkuDto
 */
export interface UpdateSkuDto {
    /**
     * 
     * @type {string}
     * @memberof UpdateSkuDto
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateSkuDto
     */
    'description'?: string;
    /**
     * 
     * @type {PriceSchema}
     * @memberof UpdateSkuDto
     */
    'price'?: PriceSchema;
    /**
     * 
     * @type {string}
     * @memberof UpdateSkuDto
     */
    'status'?: UpdateSkuDtoStatusEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateSkuDto
     */
    'tags'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof UpdateSkuDto
     */
    'imagePublicId'?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateSkuDtoStatusEnum {
    Selling = 'selling',
    Deleted = 'deleted',
    NewlyReleased = 'newly-released'
}

