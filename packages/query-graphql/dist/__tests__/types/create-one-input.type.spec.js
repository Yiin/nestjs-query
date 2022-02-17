"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const graphql_1 = require("@nestjs/graphql");
const src_1 = require("../../src");
const __fixtures__1 = require("../__fixtures__");
describe('CreateOneInputType', () => {
    let FakeType = class FakeType {
    };
    (0, tslib_1.__decorate)([
        (0, graphql_1.Field)(),
        (0, class_validator_1.MinLength)(5),
        (0, tslib_1.__metadata)("design:type", String)
    ], FakeType.prototype, "field", void 0);
    FakeType = (0, tslib_1.__decorate)([
        (0, graphql_1.InputType)()
    ], FakeType);
    let CreateOne = class CreateOne extends (0, src_1.CreateOneInputType)('fakeInput', FakeType) {
    };
    CreateOne = (0, tslib_1.__decorate)([
        (0, graphql_1.InputType)()
    ], CreateOne);
    it('should create an args type with the field as the type', async () => {
        let CreateOneInputTypeSpec = class CreateOneInputTypeSpec {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            test(input) {
                return 1;
            }
        };
        (0, tslib_1.__decorate)([
            (0, graphql_1.Query)(() => graphql_1.Int),
            (0, tslib_1.__param)(0, (0, graphql_1.Args)('input')),
            (0, tslib_1.__metadata)("design:type", Function),
            (0, tslib_1.__metadata)("design:paramtypes", [CreateOne]),
            (0, tslib_1.__metadata)("design:returntype", Number)
        ], CreateOneInputTypeSpec.prototype, "test", null);
        CreateOneInputTypeSpec = (0, tslib_1.__decorate)([
            (0, graphql_1.Resolver)()
        ], CreateOneInputTypeSpec);
        const schema = await (0, __fixtures__1.generateSchema)([CreateOneInputTypeSpec]);
        expect(schema).toMatchSnapshot();
    });
    it('should properly assign the input field', () => {
        const input = { field: 'hello' };
        const it = (0, class_transformer_1.plainToClass)(CreateOne, { input });
        expect(it.input).toEqual(input);
        expect(it.input).toBeInstanceOf(FakeType);
    });
    it('should assign the typeName to the input field', () => {
        const input = { field: 'hello' };
        const it = (0, class_transformer_1.plainToClass)(CreateOne, { fakeInput: input });
        expect(it.input).toEqual(input);
        expect(it.input).toBeInstanceOf(FakeType);
    });
    describe('validation', () => {
        it('should validate the input property', () => {
            const input = { field: 'hola' };
            const it = (0, class_transformer_1.plainToClass)(CreateOne, { input });
            const errors = (0, class_validator_1.validateSync)(it);
            expect(errors).toEqual([
                {
                    children: [
                        {
                            children: [],
                            constraints: {
                                minLength: 'field must be longer than or equal to 5 characters',
                            },
                            property: 'field',
                            target: input,
                            value: input.field,
                        },
                    ],
                    property: 'input',
                    target: { input },
                    value: input,
                },
            ]);
        });
        it('should assign the typeName to the input field', () => {
            const input = { field: 'hola' };
            const it = (0, class_transformer_1.plainToClass)(CreateOne, { fakeInput: input });
            const errors = (0, class_validator_1.validateSync)(it);
            expect(errors).toEqual([
                {
                    children: [
                        {
                            children: [],
                            constraints: {
                                minLength: 'field must be longer than or equal to 5 characters',
                            },
                            property: 'field',
                            target: input,
                            value: input.field,
                        },
                    ],
                    property: 'input',
                    target: { input },
                    value: input,
                },
            ]);
        });
    });
});
//# sourceMappingURL=create-one-input.type.spec.js.map