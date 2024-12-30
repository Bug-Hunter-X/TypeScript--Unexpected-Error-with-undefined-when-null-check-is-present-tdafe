# TypeScript Undefined Error with Null Check

This repository demonstrates a common TypeScript error related to how the type system handles `undefined` values in conjunction with null checks. The error occurs when a function parameter is declared as `string | null`, a null check is performed, but the function is called with `undefined`.

## Problem

TypeScript's strict null checks are designed to prevent errors, but they don't automatically treat `undefined` as a subtype of `null` in this context. This example shows that even though we handle the `null` case explicitly, calling the function with `undefined` still results in a type error. 

## Solution

To fix this, we can explicitly check for `undefined` or widen the function's parameter type to include `undefined`.