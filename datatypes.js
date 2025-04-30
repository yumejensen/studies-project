/**
 * DATATYPES:
 * --------------------------------------------------------------------------------------------------------------------------
 * 0: INTRO
 * 
 * Data is categorized into 8 different types in JavaScript. Knowing datatypes is crucial because the 
 * JavaScript interpreter will handle each data type differently. 
 * The two big categories are simple/primitive datatypes and complex datatypes.
 * Simple dataypes are atomic, immutable, and copy by value. 
 * Complex datatypes are mutable, an indefinite size, and copy by reference.
 * 
 * --------------------------------------------------------------------------------------------------------------------------
 * 1: SIMPLE/ PRIMITIVE DATA TYPES
 * 
 * // NUMBER //
 * Numbers are numeric data, stored as a decimal (floating point). Numbers can be written with or without decimals.
 * Numbers can also be written with exponential notation.
 * let x = 25;
 * let y = 25.00;
 * let z = 25e5; // 2500000
 * 
 * // BIGINT //
 * BigInt variables are used to store integer values that are too big to be represented by a normal number. 
 * Normal numbers lose accuracy after 15 digits.
 * BigInt are created by declaring with BigInt() or adding n to the end of an integer.
 * let b = 100000000000000000n;
 * let c = BigInt(100000000000000000);
 * 
 * // STRING //
 * Strings are character data and are written with single or double quotes on the outside. Quotes can exist inside
 * a string if they are different.
 * let string1 = "He is called 'Sam' not 'Sammy'";
 * To avoid this problem altogether, the backslash can be used to escape certain characters.
 * let string2 = "He is called \"Sam\" not \"Sammy\""; // prints  "He is called 'Sam' not 'Sammy'"
 * The backslash is also used to escape apostraphes and backslashes.
 * 
 * // BOOLEAN // 
 * Booleans are true and false. They are used in conditional testing, such as if statements. 
 * Most of the time, booleans do not need to be declared explicitly because JavaScript converts values 
 * to booleans automatically in a boolean context by evaluating truthy and falsy.
 * All values are inherently truthy except: false, 0, -0, "", null, undefined, NaN
 * 
 * // UNDEFINED //
 * No value, not initialized
 * 
 * // NULL //
 * No value, intentionally nullified by a programmer
 * 
 * // NaN //
 * Not a number
 * 
 * --------------------------------------------------------------------------------------------------------------------------
 * 2: COMPLEX DATA TYPES
 * 
 * // ARRAY
 * // OBJECT
 * // FUNCTION
 * 
 * --------------------------------------------------------------------------------------------------------------------------
 * 10: INFINITY AND -INFINITY
 * 
 * --------------------------------------------------------------------------------------------------------------------------
 * 11: SIMPLE VS COMPLEX DATA TYPES
 * 
 * --------------------------------------------------------------------------------------------------------------------------
 * 12: COPY BY VALUE VS COPY BY REFERENCE 
 * 
 * 
 */