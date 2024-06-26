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
import { DistrictLevel } from './district-level';
// May contain unused imports in some cases
// @ts-ignore
import { ProvinceLevel } from './province-level';
// May contain unused imports in some cases
// @ts-ignore
import { WardLevel } from './ward-level';

/**
 * 
 * @export
 * @interface UserAddressSchema
 */
export interface UserAddressSchema {
    /**
     * 
     * @type {ProvinceLevel}
     * @memberof UserAddressSchema
     */
    'provinceLevel': ProvinceLevel;
    /**
     * 
     * @type {DistrictLevel}
     * @memberof UserAddressSchema
     */
    'districtLevel': DistrictLevel;
    /**
     * 
     * @type {WardLevel}
     * @memberof UserAddressSchema
     */
    'wardLevel': WardLevel;
    /**
     * 
     * @type {string}
     * @memberof UserAddressSchema
     */
    'detail': string;
    /**
     * 
     * @type {boolean}
     * @memberof UserAddressSchema
     */
    'isDefault': boolean;
    /**
     * 
     * @type {string}
     * @memberof UserAddressSchema
     */
    'customerName': string;
    /**
     * The phone number of customer
     * @type {string}
     * @memberof UserAddressSchema
     */
    'phoneNumbers': string;
    /**
     * 
     * @type {string}
     * @memberof UserAddressSchema
     */
    'type': string;
}

