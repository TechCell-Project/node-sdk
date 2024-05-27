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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { Cart } from '../models';
// @ts-ignore
import { UpdateCartDto } from '../models';
/**
 * CartsApi - axios parameter creator
 * @export
 */
export const CartsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get list of carts
         * @summary Get list of carts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cartsControllerGetCarts: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/carts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Add/update cart. If user already has cart, it will be updated. Set quantity to 0 to remove product from cart
         * @summary Add/update cart
         * @param {UpdateCartDto} updateCartDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cartsControllerUpdateCart: async (updateCartDto: UpdateCartDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'updateCartDto' is not null or undefined
            assertParamExists('cartsControllerUpdateCart', 'updateCartDto', updateCartDto)
            const localVarPath = `/api/carts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateCartDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CartsApi - functional programming interface
 * @export
 */
export const CartsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CartsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get list of carts
         * @summary Get list of carts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cartsControllerGetCarts(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Cart>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cartsControllerGetCarts(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CartsApi.cartsControllerGetCarts']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Add/update cart. If user already has cart, it will be updated. Set quantity to 0 to remove product from cart
         * @summary Add/update cart
         * @param {UpdateCartDto} updateCartDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cartsControllerUpdateCart(updateCartDto: UpdateCartDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cartsControllerUpdateCart(updateCartDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CartsApi.cartsControllerUpdateCart']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CartsApi - factory interface
 * @export
 */
export const CartsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CartsApiFp(configuration)
    return {
        /**
         * Get list of carts
         * @summary Get list of carts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cartsControllerGetCarts(options?: RawAxiosRequestConfig): AxiosPromise<Cart> {
            return localVarFp.cartsControllerGetCarts(options).then((request) => request(axios, basePath));
        },
        /**
         * Add/update cart. If user already has cart, it will be updated. Set quantity to 0 to remove product from cart
         * @summary Add/update cart
         * @param {CartsApiCartsControllerUpdateCartRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cartsControllerUpdateCart(requestParameters: CartsApiCartsControllerUpdateCartRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.cartsControllerUpdateCart(requestParameters.updateCartDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for cartsControllerUpdateCart operation in CartsApi.
 * @export
 * @interface CartsApiCartsControllerUpdateCartRequest
 */
export interface CartsApiCartsControllerUpdateCartRequest {
    /**
     * 
     * @type {UpdateCartDto}
     * @memberof CartsApiCartsControllerUpdateCart
     */
    readonly updateCartDto: UpdateCartDto
}

/**
 * CartsApi - object-oriented interface
 * @export
 * @class CartsApi
 * @extends {BaseAPI}
 */
export class CartsApi extends BaseAPI {
    /**
     * Get list of carts
     * @summary Get list of carts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CartsApi
     */
    public cartsControllerGetCarts(options?: RawAxiosRequestConfig) {
        return CartsApiFp(this.configuration).cartsControllerGetCarts(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Add/update cart. If user already has cart, it will be updated. Set quantity to 0 to remove product from cart
     * @summary Add/update cart
     * @param {CartsApiCartsControllerUpdateCartRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CartsApi
     */
    public cartsControllerUpdateCart(requestParameters: CartsApiCartsControllerUpdateCartRequest, options?: RawAxiosRequestConfig) {
        return CartsApiFp(this.configuration).cartsControllerUpdateCart(requestParameters.updateCartDto, options).then((request) => request(this.axios, this.basePath));
    }
}
