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
 * @interface Attribute
 */
export interface Attribute {
    /**
     * 
     * @type {string}
     * @memberof Attribute
     */
    '_id': string;
    /**
     * 
     * @type {string}
     * @memberof Attribute
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof Attribute
     */
    'updatedAt': string;
    /**
     * Attribute label, unique
     * @type {string}
     * @memberof Attribute
     */
    'label': string;
    /**
     * Attribute name, can be translated
     * @type {string}
     * @memberof Attribute
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Attribute
     */
    'description': string;
    /**
     * Attribute status
     * @type {string}
     * @memberof Attribute
     */
    'status': AttributeStatusEnum;
    /**
     * Attribute unit
     * @type {string}
     * @memberof Attribute
     */
    'unit'?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum AttributeStatusEnum {
    Available = 'available',
    Deleted = 'deleted'
}


