/*
 *  Legal Driving Age
 *
 *	#16 from the book "Exercises for Programmers"
 *		by Brian Hogan
 *
 */


/*
 *  write a program that asks the user for their age and compare it to the legal driving age of sixteen.
 if the user is sixteen or the older, then the program should display “you are old enough to legally drive.”
 if the user is under sixteen, the program should display “you are not old enough to legally drive”

constraints:
-use a single output statement
- use a ternary operator to write this program.

condition ? expr1 : expr2


challenges:
-if the user enters a number thats less that zero or enters a nonnumeric data, display an error message that asks the user to enter a valid age.
- instead of hard coding the driving age in you program logic, research driving ages for various countries and create a lookup table for the driving age and countries. prompt for the the age and display which countries user can legally drive in.
 *
 *
 *
 */

'use strict';

$(document).ready(function() {

	function printMessage() {

		var age = parseInt($age.val());

		if( (typeof(age) !== 'number') || (isNaN(age) === true) ) {
			return $error.text('Please enter a valid age.');
		}

		console.log(age);

		$message.text('');
		$error.text('');

		age >= 16 ? $message.text('You are old enough to legally drive') : $error.text('You are NOT old enough to legally drive');
	}

	var $form = $('#submit-age');
	var $age = $('#age');

	var $message = $('#message');
	var $error = $('#error-message');

	$form.on('submit', function(e) {
		e.preventDefault();

		printMessage();
	});
});
