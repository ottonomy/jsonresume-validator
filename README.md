## JSON Resume Validator

I wrote a description of what was posted at http://jsonresume.org in JSON-schema, and spun up a quick Node.js validator command line app that will test example resumes to ensure they are valid.

Try generating a resume with a form [here](http://jonnykry.github.io/JSONResumeWebApp/) and validating it with the command ```node index.js ./resume-example.json ./resume-schema-v0.1.json```. It will return an array of validation errors in JSON.