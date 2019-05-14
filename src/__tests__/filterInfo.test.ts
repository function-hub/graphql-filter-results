// tslint:disable:object-literal-sort-keys
import { pickoutFieldWithInfo } from '../index';

test('filter gql resolver info', () => {
  const mockInfo = {
    fieldName: 'author',
    fieldNodes: [
      {
        kind: 'Field',
        name: { kind: 'Name', value: 'author', loc: { start: 4, end: 10 } },
        arguments: [
          {
            kind: 'Argument',
            name: { kind: 'Name', value: 'id', loc: { start: 11, end: 13 } },
            value: { kind: 'IntValue', value: '1', loc: { start: 15, end: 16 } },
            loc: { start: 11, end: 16 },
          },
        ],
        directives: [],
        selectionSet: {
          kind: 'SelectionSet',
          selections: [
            {
              kind: 'Field',
              name: { kind: 'Name', value: 'username', loc: { start: 24, end: 32 } },
              arguments: [],
              directives: [],
              loc: { start: 24, end: 32 },
            },
            {
              kind: 'Field',
              name: { kind: 'Name', value: 'posts', loc: { start: 37, end: 42 } },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'Field',
                    name: { kind: 'Name', value: 'title', loc: { start: 51, end: 56 } },
                    arguments: [],
                    directives: [],
                    loc: { start: 51, end: 56 },
                  },
                ],
                loc: { start: 43, end: 62 },
              },
              loc: { start: 37, end: 62 },
            },
          ],
          loc: { start: 18, end: 66 },
        },
        loc: { start: 4, end: 66 },
      },
    ],
    returnType: 'User!',
    parentType: 'Query',
    path: { key: 'author' },
    schema: {
      __validationErrors: [],
      __allowedLegacyNames: [],
      _queryType: 'Query',
      _directives: ['@cacheControl', '@skip', '@include', '@deprecated'],
      _typeMap: {
        Query: 'Query',
        ID: 'ID',
        User: 'User',
        String: 'String',
        Post: 'Post',
        __Schema: '__Schema',
        __Type: '__Type',
        __TypeKind: '__TypeKind',
        Boolean: 'Boolean',
        __Field: '__Field',
        __InputValue: '__InputValue',
        __EnumValue: '__EnumValue',
        __Directive: '__Directive',
        __DirectiveLocation: '__DirectiveLocation',
        CacheControlScope: 'CacheControlScope',
        Upload: 'Upload',
        Int: 'Int',
      },
      _possibleTypeMap: {},
      _implementations: {},
      _extensionsEnabled: true,
    },
    fragments: {},
    operation: {
      kind: 'OperationDefinition',
      operation: 'query',
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'author', loc: { start: 4, end: 10 } },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id', loc: { start: 11, end: 13 } },
                value: { kind: 'IntValue', value: '1', loc: { start: 15, end: 16 } },
                loc: { start: 11, end: 16 },
              },
            ],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'username', loc: { start: 24, end: 32 } },
                  arguments: [],
                  directives: [],
                  loc: { start: 24, end: 32 },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'posts', loc: { start: 37, end: 42 } },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'title', loc: { start: 51, end: 56 } },
                        arguments: [],
                        directives: [],
                        loc: { start: 51, end: 56 },
                      },
                    ],
                    loc: { start: 43, end: 62 },
                  },
                  loc: { start: 37, end: 62 },
                },
              ],
              loc: { start: 18, end: 66 },
            },
            loc: { start: 4, end: 66 },
          },
        ],
        loc: { start: 0, end: 68 },
      },
      loc: { start: 0, end: 68 },
    },
    variableValues: {},
    cacheControl: { cacheHint: { maxAge: 0 } },
  };
  expect(pickoutFieldWithInfo(mockInfo)).toEqual(['author', 'username', 'posts', 'title']);
});
