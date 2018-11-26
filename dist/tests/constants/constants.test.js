"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __importDefault(require("../constants"));
describe('CONSTANTS object', function () {
    test('should be defined', function () {
        expect(constants_1.default).toBeDefined();
    });
    test('should contain REGIONS property', function () {
        expect(constants_1.default.REGIONS).toBeDefined();
    });
    test('should contain LOCALES property', function () {
        expect(constants_1.default.LOCALES).toBeDefined();
    });
    test('should contain DEFAULT_LOCALES property', function () {
        expect(constants_1.default.LOCALES).toBeDefined();
    });
    test('should contain SERVERS property', function () {
        expect(constants_1.default.SERVERS).toBeDefined();
    });
    test('should contain SC2_REALMS property', function () {
        expect(constants_1.default.SC2_REALMS).toBeDefined();
    });
    test('should contain OAUTH_AUTHORIZE_SERVERS property', function () {
        expect(constants_1.default.SC2_REALMS).toBeDefined();
    });
    test('should contain OAUTH_TOKEN_URIS property', function () {
        expect(constants_1.default.OAUTH_TOKEN_URIS).toBeDefined();
    });
    test('should contain OAUTH_CHECK_TOKEN_URIS property', function () {
        expect(constants_1.default.OAUTH_CHECK_TOKEN_URIS).toBeDefined();
    });
});
//# sourceMappingURL=constants.test.js.map