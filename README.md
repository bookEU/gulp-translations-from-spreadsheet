# gulp-translations-from-spreadsheet

[![Build Status](https://travis-ci.org/dlmanning/gulp-sass.svg?branch=master)](https://travis-ci.org/dlmanning/gulp-sass)

> Gulp plugin to generate translations json files for angular application from a google spreadsheet

# Install

```
npm install gulp-translation-from-spreadsheet --save-dev
```

# Basic Usage

Something like this will generate translation json files based on google spreadsheet:

```javascript
'use strict';

var gulp = require('gulp');
var translations = require('gulp-translations-from-spreadsheet');

gulp.task('translations', function () {
  return translations({
          key: '1cKTLZCglRJkJR_7NGL6vPn1MHdadcLPUOMYjqVKFlB4',
          sheet: 1,
          languages: ['en', 'ru'],
          keyColumn: 'key'
      })
    .pipe(gulp.dest('./i18n'));
});
```

### Options

#### key
Type: `String`

Google spreadsheet key.  
*Example: `https://docs.google.com/spreadsheets/d/1cKTLZCglRJkJR_7NGL6vPn1MHdadcLPUOMYjqVKFlB4/edit?usp=sharing`*
*`1cKTLZCglRJkJR_7NGL6vPn1MHdadcLPUOMYjqVKFlB4 is a key`*

#### sheet
Type: `Number`

Worksheet id
**NOTE:** IDs start at 1

#### languages
Type: `Array`

List of languages is worksheet (should match with column names

#### keyColumn
Type: `String`

Column name for prompts ids



**NOTE:** there is link(https://github.com/marcbuils/gulp-i18n-gspreadsheet) to alternative version of such gulp plugin 
