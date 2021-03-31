import type { JSON } from './';

export interface JSONSchema {
	/**
	 * The `$id` property is a URI-reference that serves two purposes:
	 * - It declares a unique identifier for the schema.
	 * - It declares a base URI against which `$ref` URI-references are resolved.
	 */
	$id?: string;

	/**
	 * The `$schema` keyword is used to declare that a JSON fragment is actually a piece of JSON
	 * Schema. It also declares which version of the JSON Schema standard that the schema was
	 * written against.
	 */
	$schema?: string;
	$ref?: string;

	/**
	 * The `$comment` keyword is strictly intended for adding comments to the JSON schema source.
	 */
	$comment?: string;

	/**
	 * The `title` keyword provides a short name for the schema.
	 */
	title?: string;

	/**
	 * The `description` keyword provides an explanation about the purpose of the data described by
	 * the schema.
	 */
	description?: string;

	/**
	 * The `default` keyword specifies a default value for an item.
	 */
	default?: JSON;

	/**
	 * @defaultValue `false`
	 */
	readonly?: boolean;

	/**
	 * @defaultValue `false`
	 */
	writeOnly?: boolean;

	/**
	 * The `examples` keyword is a place to provide an array of examples that validate against the
	 * schema.
	 */
	examples?: JSON[];

	/**
	 * Numbers can be restricted to a multiple of a given number, using the `multipleOf` keyword. It
	 * may be set to any positive number.
	 */
	multipleOf?: number;

	/**
	 * The maximum value, including this value, in a range of numbers a `number` type can be
	 * (`x ≤ maxium`).
	 */
	maximum?: number;

	/**
	 * The maximum value, excluding this value, in a range of numbers a `number` type can be
	 * (`x < exclusiveMaxium`).
	 */
	exclusiveMaximum?: number;

	/**
	 * The minimum value, including this value, in a range of numbers a `number` type can be
	 * (`x ≥ minimum`).
	 */
	minimum?: number;

	/**
	 * The minimum value, excluding this value, in a range of numbers a `number` type can be
	 * (`x > exclusiveMinimum`).
	 */
	exclusiveMinimum?: number;

	/**
	 * The maximum length of a string; must be a non-negative number.
	 */
	maxLength?: number;

	/**
	 * The minimum length of a string; must be a non-negative number.
	 *
	 * @defaultValue `0`
	 */
	minLength?: number;

	/**
	 * The `pattern` keyword is used to restrict a string to a particular regular expression.
	 */
	pattern?: string;

	/**
	 * The `additionalItems` keyword controls whether it's valid to have additional items in the
	 * array beyond what is defined in `items`. It may also be a schema to validate against every
	 * additional item in the array.
	 */
	additionalItems?: boolean | JSONSchema;

	/**
	 * The `items` keyword validates the items of an array against a schema. It can either be a
	 * single schema or an array of schemas.
	 * - If it's a single schema, it will be used to validate all of the items in the array, and the
	 * `additionalItems` keyword will be ignored.
	 * - If it's an array, each item must be a schema that corresponds to each index of the array
	 * that's being validated.
	 */
	items?: JSONSchema | JSONSchema[];

	/**
	 * The maximum length of an array; must be a non-negative number.
	 */
	maxItems?: number;

	/**
	 * The minimum length of an array; must be a non-negative number.
	 *
	 * @defaultValue `0`
	 */
	minItems?: number;

	/**
	 * The `uniqueItems` keyword ensures that each of the items in an array is unique.
	 *
	 * @defaultValue `false`
	 */
	uniqueItems?: boolean;

	/**
	 * The `contains` keyword defines a schema that only needs to validate against one or more
	 * items in an array, whereas the `items` schema must be valid for **every** item.
	 */
	contains?: JSONSchema;

	/**
	 * The maximum amount of properties that can be on an object; must be a non-negative integer.
	 */
	maxProperties?: number;

	/**
	 * The minimum amount of properties that can be on an object; must be a non-negative integer.
	 *
	 * @defaultValue `0`
	 */
	minProperties?: number;

	/**
	 * By default, the properties defined by the `properties` keyword are not required. The
	 * `required` keyword defines a list of required properties. It takes an array of zero or more
	 * strings. Each of these strings must be unique.
	 */
	required?: string[];

	/**
	 * The `additionalProperties` keyword is used to control the handling of properties whose names
	 * are not listed in the `properties` keyword. By default, any additional properties are
	 * allowed. The `additionalProperties` keyword may be either a boolean or an object.
	 * - If it's a boolean and set to `false`, no additional properties will be allowed.
	 * - If it's an object, that object is a schema that will be used to validate any additional
	 * properties not listed in `properties`.
	 */
	additonalProperties?: boolean | JSONSchema;
	definitions?: Record<string, JSONSchema>;

	/**
	 * The `properties` keyword defines the key-value pairs on an object. The value of `properties`
	 * is an object, where each key is the name of a property and each value is a JSON schema used
	 * to validate that property.
	 */
	properties?: Record<string, JSONSchema>;

	/**
	 * The `patternProperties` keyword maps regular expressions to schemas. If an additional
	 * property matches a given regular expression, it must also validate against the corresponding
	 * schema.
	 *
	 * `patternProperties` can be used in conjunction with `additionalProperties`, in which case,
	 * `additionalProperties` will refer to any properties that are not explicitly listed in
	 * `properties` and don't match any of the `patternProperties`.
	 */
	patternProperties?: Record<string, JSONSchema>;

	/**
	 * The `dependencies` keyword allows the schema of the object to change based on the presence of
	 * certain special properties. There are two forms of dependencies:
	 * - **Property dependencies** declare that certain other properties must be present if a given
	 * property is present.
	 * - **Schema dependencies** declare that the schema changes when a given property is present.
	 */
	dependencies?: Record<string, JSONSchema | string[]>;

	/**
	 * The `propertyNames` keyword validates the names of properties against a schema, irrespective
	 * of their values.
	 */
	propertyNames?: JSONSchema;

	/**
	 * The `const` keyword is used to restrict a value to a single value.
	 */
	const?: JSON;

	/**
	 * The `enum` keyword is used to restrict a value to a fixed set of values. It must be an array
	 * with at least one element, where each element is unique.
	 */
	enum?: [JSON, ...JSON[]];

	/**
	 * The `type` keyword specifies the data type for a schema. It may either be a string or an
	 * array.
	 * - If it's a string, it must be the name of one of the basic types.
	 * - If it's an array, it must be an array of strings with at least one element, where each
	 * string is the name of one of the basic types, and each element is unique.
	 */
	type?: JSONSchemaSimpleType | [JSONSchemaSimpleType, ...JSONSchemaSimpleType[]];

	/**
	 * The `format` keyword allows for basic semantic validation on certain kinds of string values
	 * that are commonly used.
	 */
	format?: string;

	/**
	 * The `contentMediaType` keyword specifies the MIME type of the contents of a string.
	 */
	contentMediaType?: string;

	/**
	 * The `contentEncoding` keyword specifies the encoding used to store the contents.
	 */
	contentEncoding?: JSONSchemaContentEncoding;
	if?: JSONSchema;
	then?: JSONSchema;
	else?: JSONSchema;

	/**
	 * To validate against `allOf`, the given data must be valid against all of the given
	 * subschemas.
	 */
	allOf?: [JSONSchema, ...JSONSchema[]];

	/**
	 * To validate against `anyOf`, the given data must be valid against any (one or more) of the
	 * given subschemas.
	 */
	anyOf?: [JSONSchema, ...JSONSchema[]];

	/**
	 * To validate against `oneOf`, the given data must be valid against exactly one of the given
	 * subschemas.
	 */
	oneOf?: [JSONSchema, ...JSONSchema[]];

	/**
	 * The `not` keyword declares that an instance validates if it doesn't validate against the
	 * given subschema.
	 */
	not?: JSONSchema;
}

export enum JSONSchemaSimpleType {
	/**
	 * The `array` type is used for ordered elements. In JSON, each element in an array may be of a
	 * different type.
	 */
	Array = 'array',

	/**
	 * The `boolean` type matches only two special values: `true` and `false`. Note that values that
	 * *evaluate* to `true` or `false`, such as `1` and `0`, are not accepted by the schema.
	 */
	Boolean = 'boolean',

	/**
	 * The `integer` type is used for integral numbers.
	 */
	Integer = 'integer',

	/**
	 * The `null` type is generally used to represent a missing value. When a schema specifies a
	 * type of `null`, it has only one acceptable value: `null`.
	 */
	Null = 'null',

	/**
	 * The `number` type is used for any numeric type, either integers or floating point numbers.
	 */
	Number = 'number',

	/**
	 * The `object` type maps `keys` to `values`, where each `key` must always be strings.
	 */
	Object = 'object',

	/**
	 * The `string` type is used for strings of text. It may contain Unicode characters.
	 */
	String = 'string'
}

export enum JSONSchemaFormat {
	/**
	 * Date and time together.
	 */
	DateTime = 'date-time',

	/**
	 * Date.
	 */
	Date = 'date',

	/**
	 * Time.
	 */
	Time = 'time',

	/**
	 * Internet email address.
	 */
	Email = 'email',

	/**
	 * The internationalized form of an internet email address.
	 */
	IDNEmail = 'idn-email',

	/**
	 * Internet hostname.
	 */
	Hostname = 'hostname',

	/**
	 * The internationalized form of an internet host name.
	 */
	IDNHostname = 'idn-hostname',

	/**
	 * IPv4 address, according to dotted-quad ABNF syntax.
	 */
	IPv4 = 'ipv4',

	/**
	 * IPv6 address.
	 */
	IPv6 = 'ipv6',

	/**
	 * A universal resource identifier.
	 */
	URI = 'uri',

	/**
	 * A URI reference (either a URI or a relative-reference).
	 */
	URIReference = 'uri-reference',

	/**
	 * The internationalized equivalent of a URI.
	 */
	IRI = 'iri',

	/**
	 * The internationalized equivalent of a URI reference.
	 */
	IRIReference = 'iri-reference',

	/**
	 * A URI template (of any level).
	 */
	URITemplate = 'uri-template',

	/**
	 * A JSON pointer.
	 */
	JSONPointer = 'json-pointer',

	/**
	 * A relative JSON pointer.
	 */
	RelativeJSONPointer = 'relative-json-pointer',

	/**
	 * A regular expression, which should be valid according to the ECMA 262 dialect.
	 */
	Regex = 'regex'
}

export type JSONSchemaContentEncoding = '7bit' | '8bit' | 'binary' | 'quoted-printable' | 'base64';
