/* tslint:disable */
/* eslint-disable */
/**
 * Todo app
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface BaseTodoDto
 */
export interface BaseTodoDto {
    /**
     * タイトル
     * @type {string}
     * @memberof BaseTodoDto
     */
    'title': string;
    /**
     * 説明
     * @type {string}
     * @memberof BaseTodoDto
     */
    'description': string;
}
/**
 * 
 * @export
 * @interface BaseUserDto
 */
export interface BaseUserDto {
    /**
     * 名前
     * @type {string}
     * @memberof BaseUserDto
     */
    'name': string;
    /**
     * メールアドレス
     * @type {string}
     * @memberof BaseUserDto
     */
    'email': string;
    /**
     * パスワード
     * @type {string}
     * @memberof BaseUserDto
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface CreateTodoDto
 */
export interface CreateTodoDto {
    /**
     * タイトル
     * @type {string}
     * @memberof CreateTodoDto
     */
    'title': string;
    /**
     * 説明
     * @type {string}
     * @memberof CreateTodoDto
     */
    'description': string;
}
/**
 * 
 * @export
 * @interface CreateUserDto
 */
export interface CreateUserDto {
    /**
     * 名前
     * @type {string}
     * @memberof CreateUserDto
     */
    'name': string;
    /**
     * メールアドレス
     * @type {string}
     * @memberof CreateUserDto
     */
    'email': string;
    /**
     * パスワード
     * @type {string}
     * @memberof CreateUserDto
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface UpdateTodoDto
 */
export interface UpdateTodoDto {
    /**
     * タイトル
     * @type {string}
     * @memberof UpdateTodoDto
     */
    'title': string;
    /**
     * 説明
     * @type {string}
     * @memberof UpdateTodoDto
     */
    'description': string;
    /**
     * update
     * @type {string}
     * @memberof UpdateTodoDto
     */
    'completedAt': string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetHello: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary create todo document
         * @param {CreateTodoDto} createTodoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerCreate: async (createTodoDto: CreateTodoDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createTodoDto' is not null or undefined
            assertParamExists('todoControllerCreate', 'createTodoDto', createTodoDto)
            const localVarPath = `/todos/create`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createTodoDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary delete todo document
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerDelete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('todoControllerDelete', 'id', id)
            const localVarPath = `/todos/delete`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerFind: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('todoControllerFind', 'id', id)
            const localVarPath = `/todos/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerIndex: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/todos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary update todo document
         * @param {string} id 
         * @param {UpdateTodoDto} updateTodoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerUpdate: async (id: string, updateTodoDto: UpdateTodoDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('todoControllerUpdate', 'id', id)
            // verify required parameter 'updateTodoDto' is not null or undefined
            assertParamExists('todoControllerUpdate', 'updateTodoDto', updateTodoDto)
            const localVarPath = `/todos/update`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateTodoDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary user signup
         * @param {CreateUserDto} createUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerCreate: async (createUserDto: CreateUserDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createUserDto' is not null or undefined
            assertParamExists('userControllerCreate', 'createUserDto', createUserDto)
            const localVarPath = `/user/signup`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createUserDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerIndex: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary user signin
         * @param {BaseUserDto} baseUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerSignin: async (baseUserDto: BaseUserDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'baseUserDto' is not null or undefined
            assertParamExists('userControllerSignin', 'baseUserDto', baseUserDto)
            const localVarPath = `/user/signin`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(baseUserDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetHello(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.appControllerGetHello(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary create todo document
         * @param {CreateTodoDto} createTodoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todoControllerCreate(createTodoDto: CreateTodoDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateTodoDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todoControllerCreate(createTodoDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary delete todo document
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todoControllerDelete(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todoControllerDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todoControllerFind(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseTodoDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todoControllerFind(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todoControllerIndex(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<BaseTodoDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todoControllerIndex(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary update todo document
         * @param {string} id 
         * @param {UpdateTodoDto} updateTodoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todoControllerUpdate(id: string, updateTodoDto: UpdateTodoDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todoControllerUpdate(id, updateTodoDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary user signup
         * @param {CreateUserDto} createUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerCreate(createUserDto: CreateUserDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateUserDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerCreate(createUserDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerIndex(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<BaseUserDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerIndex(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary user signin
         * @param {BaseUserDto} baseUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerSignin(baseUserDto: BaseUserDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerSignin(baseUserDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetHello(options?: any): AxiosPromise<void> {
            return localVarFp.appControllerGetHello(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary create todo document
         * @param {CreateTodoDto} createTodoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerCreate(createTodoDto: CreateTodoDto, options?: any): AxiosPromise<CreateTodoDto> {
            return localVarFp.todoControllerCreate(createTodoDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary delete todo document
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerDelete(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.todoControllerDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerFind(id: string, options?: any): AxiosPromise<BaseTodoDto> {
            return localVarFp.todoControllerFind(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerIndex(options?: any): AxiosPromise<Array<BaseTodoDto>> {
            return localVarFp.todoControllerIndex(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary update todo document
         * @param {string} id 
         * @param {UpdateTodoDto} updateTodoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoControllerUpdate(id: string, updateTodoDto: UpdateTodoDto, options?: any): AxiosPromise<void> {
            return localVarFp.todoControllerUpdate(id, updateTodoDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary user signup
         * @param {CreateUserDto} createUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerCreate(createUserDto: CreateUserDto, options?: any): AxiosPromise<CreateUserDto> {
            return localVarFp.userControllerCreate(createUserDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerIndex(options?: any): AxiosPromise<Array<BaseUserDto>> {
            return localVarFp.userControllerIndex(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary user signin
         * @param {BaseUserDto} baseUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerSignin(baseUserDto: BaseUserDto, options?: any): AxiosPromise<void> {
            return localVarFp.userControllerSignin(baseUserDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public appControllerGetHello(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).appControllerGetHello(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary create todo document
     * @param {CreateTodoDto} createTodoDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public todoControllerCreate(createTodoDto: CreateTodoDto, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).todoControllerCreate(createTodoDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary delete todo document
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public todoControllerDelete(id: string, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).todoControllerDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public todoControllerFind(id: string, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).todoControllerFind(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public todoControllerIndex(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).todoControllerIndex(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary update todo document
     * @param {string} id 
     * @param {UpdateTodoDto} updateTodoDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public todoControllerUpdate(id: string, updateTodoDto: UpdateTodoDto, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).todoControllerUpdate(id, updateTodoDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary user signup
     * @param {CreateUserDto} createUserDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public userControllerCreate(createUserDto: CreateUserDto, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).userControllerCreate(createUserDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public userControllerIndex(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).userControllerIndex(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary user signin
     * @param {BaseUserDto} baseUserDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public userControllerSignin(baseUserDto: BaseUserDto, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).userControllerSignin(baseUserDto, options).then((request) => request(this.axios, this.basePath));
    }
}


