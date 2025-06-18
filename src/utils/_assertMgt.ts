import assert from 'assert';

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export type AssertMessage = string | Error | Function | undefined | object;

const throwError = (message: AssertMessage): never => {
   let error: Error | object;
   const messageProcessed = typeof message === 'function' ? message() : message;

   switch (typeof messageProcessed) {
      case 'object':
         error = messageProcessed;
         break;
      default:
         error = new Error(messageProcessed);
         break;
   }

   throw error;
};

/**
 * Checks that value is not null nor undefined
 * @param value
 * @param message
 */
export const _assert: <T>(value: T, message?: AssertMessage) => asserts value is NonNullable<T> = (
   value,
   message,
) => {
   if (value !== undefined && value !== null && typeof value !== 'boolean') {
      return;
   }

   if (typeof value === 'boolean') {
      console.error('do not use _assert for boolean value, use _assertTrue instead');
   }

   throwError(message);
};

/**
 * Checks that value is stricly true
 * @param value
 * @param message
 */
export const _assertTrue: (value: boolean, message?: AssertMessage) => asserts value = (
   value,
   message,
) => {
   if (value === true) {
      return;
   }

   throwError(message);
};

/**
 * Checks that value1 is strictly equal to value2
 * @param value1
 * @param value2
 * @param message
 */
export const _assertEq: <T, U extends T>(
   value1: T,
   value2: U,
   message?: AssertMessage,
) => asserts value1 is U = (value1, value2, message) => {
   if (value1 === value2) {
      return;
   }

   throwError(message);
};

/**
 * Checks that value1 is deeply strictly equal to value2
 * @param value1
 * @param value2
 * @param message
 */
export const _assertDeepStrictEqual: <T>(
   actual: unknown,
   expected: T,
   message?: string | Error | undefined,
) => asserts actual is T = (actual, expected, message) => {
   assert.deepStrictEqual(actual, expected, message);
};

/**
 * Checks that value1 is strictly equal to value2
 * @param value1
 * @param value2
 * @param message
 */
export const _assertStrictEqual: <T>(
   actual: unknown,
   expected: T,
   message?: string | Error | undefined,
) => asserts actual is T = (actual, expected, message) => {
   assert.strictEqual(actual, expected, message);
};

export const _throw = (message: AssertMessage): never => throwError(message);
