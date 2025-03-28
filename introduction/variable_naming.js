// 1. no keyword in variable name
var false = 45;     // wrong
var var = 45;     // wrong

// 2. no space or gap in variable name
var full name = 'siam';      // wrong
var fullname = 'siam';      // right

// no quote
var 'address' = 'dhaka';        // wrong
var "address" = 'Khulna';        // wrong

// 4. can not start with a number. but number other than the first letter is allowed
var money = 45;     // right
var money20 = 45;     // right
var 33money = 45;     // wrong

// name is case sensitive
var address;
var Address;
var ADDRESS;
var addRess;
var ADDress;

// how to write a long variable
var my current home address = "North Shahjahanpur, Dhaka";      // wrong
var mycurrenthomeaddress = "North Shahjahanpur, Dhaka";     // right
var my_current_home_address = "North Shahjahanpur, Dhaka";     // Snake case
var myCurrentHomeAddress = "North Shahjahanpur, Dhaka";     // Camel case
var MyCurrentHomeAddress = "North Shahjahanpur, Dhaka";     // Pascal Case