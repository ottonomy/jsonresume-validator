#!/usr/bin/env node

const jayschema = require('jayschema');
const js = new jayschema;
const fs = require('fs');

console.log('======= Welcome to JSON Resumes =======');
console.log('current working dir: ' + process.cwd());
console.log('Opening with arguments: ' + process.argv.slice(2));
console.log('=======================================\n\n');


var options = loadArgs();

function loadArgs(){
	var options = {
		"subject": process.argv[2],
		"schema": process.argv[3]
	}
	return options;
}

function loadJsonFromArgs(filename){
	encoding = 'utf-8';
	var file = fs.readFileSync(filename,encoding);
	json = JSON.parse(file);
	return json;
}
var subject = loadJsonFromArgs(options.subject);
var schema = loadJsonFromArgs(options.schema);

var validationResults = validateBadgeObject(subject,schema);
console.log(JSON.stringify(validationResults));

// var resumeSchema = fs.readFileSync('./resume-schema-v0.1.json');
// var sampleResume = fs.readFileSync('./resume-example.json');

//designed to be passed JSON objects (not strings) as subject and schema. Will return an array of validation error objects. If that array length is 0, you're cool.
function validateBadgeObject(subject, schema) {
	return js.validate(subject, schema);
}

