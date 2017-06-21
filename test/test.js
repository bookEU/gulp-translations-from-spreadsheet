/*const assert = require('assert');*/

import assert from 'assert';
import StreamFile from '../src/';

import path from 'path';

describe('translations-from-spreadsheet', () => {

  it('should load google spreadsheet and create message files', async done => {

    const test = StreamFile({
      key: '',
      sheet: 1,
      languages: ['en', 'fr'],
      keyColumn: 'key',
      type: 'message'
    });

    test.once('data', (file) => {
      assert.equal(file.path, path.resolve(''));
      done()
    });

  }).timeout(10000)

  it('should load google spreadsheet and create template files', async done => {

    const test = StreamFile({
      key: '',
      sheet: 1,
      languages: ['en', 'fr'],
      keyColumn: 'key',
      type: 'template'
    });

    test.once('data', (file) => {
      assert.equal(file.path, path.resolve(''));
      done()
    });

  }).timeout(20000)


});