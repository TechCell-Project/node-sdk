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
import { AttributeInProductSchemaDto } from './attribute-in-product-schema-dto';

/**
 * 
 * @export
 * @interface UpdateSpuDto
 */
export interface UpdateSpuDto {
    /**
     * Spu name
     * @type {string}
     * @memberof UpdateSpuDto
     */
    'name'?: string;
    /**
     * Spu description
     * @type {string}
     * @memberof UpdateSpuDto
     */
    'description'?: string;
    /**
     * Common attributes
     * @type {Array<AttributeInProductSchemaDto>}
     * @memberof UpdateSpuDto
     */
    'commonAttributes'?: Array<AttributeInProductSchemaDto>;
}

