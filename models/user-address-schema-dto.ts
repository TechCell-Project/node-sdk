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
import { DistrictSchemaDTO } from './district-schema-dto';
// May contain unused imports in some cases
// @ts-ignore
import { ProvinceSchemaDTO } from './province-schema-dto';
// May contain unused imports in some cases
// @ts-ignore
import { WardSchemaDTO } from './ward-schema-dto';

/**
 * 
 * @export
 * @interface UserAddressSchemaDTO
 */
export interface UserAddressSchemaDTO {
    /**
     * The detailed address
     * @type {string}
     * @memberof UserAddressSchemaDTO
     */
    'detail': string;
    /**
     * The name of customer
     * @type {string}
     * @memberof UserAddressSchemaDTO
     */
    'customerName': string;
    /**
     * The phone number of customer
     * @type {string}
     * @memberof UserAddressSchemaDTO
     */
    'phoneNumbers': string;
    /**
     * The name type of address
     * @type {string}
     * @memberof UserAddressSchemaDTO
     */
    'type': UserAddressSchemaDTOTypeEnum;
    /**
     * The province level address
     * @type {ProvinceSchemaDTO}
     * @memberof UserAddressSchemaDTO
     */
    'provinceLevel': ProvinceSchemaDTO;
    /**
     * The district level address
     * @type {DistrictSchemaDTO}
     * @memberof UserAddressSchemaDTO
     */
    'districtLevel': DistrictSchemaDTO;
    /**
     * The ward level address
     * @type {WardSchemaDTO}
     * @memberof UserAddressSchemaDTO
     */
    'wardLevel': WardSchemaDTO;
    /**
     * The boolean value to check if this address is default or not
     * @type {boolean}
     * @memberof UserAddressSchemaDTO
     */
    'isDefault'?: boolean;
}

/**
    * @export
    * @enum {string}
    */
export enum UserAddressSchemaDTOTypeEnum {
    Home = 'home',
    Office = 'office',
    Other = 'other'
}

