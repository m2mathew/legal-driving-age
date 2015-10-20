/*
 *  Legal Driving Age
 *
 *	#16 from the book "Exercises for Programmers"
 *		by Brian Hogan
 *
 *		challenges:
 *			-if the user enters a number thats less that zero or enters a nonnumeric data, display an error message that asks the user to enter a valid age.
 *			- instead of hard coding the driving age in you program logic, research driving ages for various countries and create a lookup table for the driving age and countries. prompt for the the age and display which countries user can legally drive in.
 *
 */

'use strict';

$(document).ready(function() {

	function printMessage() {
		var age = parseInt($age.val());

		if( (typeof(age) !== 'number') || (isNaN(age) === true) ) {
			return $error.text('Please enter a valid age.');
		}

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
