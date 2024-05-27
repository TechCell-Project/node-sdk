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
import { ProductInListDto } from './product-in-list-dto';

/**
 * 
 * @export
 * @interface ProductInfinityPaginationResult
 */
export interface ProductInfinityPaginationResult {
    /**
     * 
     * @type {Array<ProductInListDto>}
     * @memberof ProductInfinityPaginationResult
     */
    'data': Array<ProductInListDto>;
    /**
     * 
     * @type {boolean}
     * @memberof ProductInfinityPaginationResult
     */
    'hasNextPage': boolean;
}

