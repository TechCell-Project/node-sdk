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
 * @interface Tag
 */
export interface Tag {
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    '_id': string;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    'updatedAt': string;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    'slug': string;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    'status': TagStatusEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum TagStatusEnum {
    Active = 'active',
    Deleted = 'deleted'
}


