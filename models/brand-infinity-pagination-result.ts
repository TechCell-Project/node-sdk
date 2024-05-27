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
import { Brand } from './brand';

/**
 * 
 * @export
 * @interface BrandInfinityPaginationResult
 */
export interface BrandInfinityPaginationResult {
    /**
     * 
     * @type {Array<Brand>}
     * @memberof BrandInfinityPaginationResult
     */
    'data': Array<Brand>;
    /**
     * 
     * @type {boolean}
     * @memberof BrandInfinityPaginationResult
     */
    'hasNextPage': boolean;
}

