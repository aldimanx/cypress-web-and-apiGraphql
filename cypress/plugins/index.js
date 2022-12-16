/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const path = require('path');
const { existsSync, readdirSync, lstatSync, rmdir, unlink } = require('fs');
const DOIWNLOAD_DIR_PATH = 'cypress/downloads';

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
  on('task', {
    getLastDownloadFilePath: () => {
      if (!existsSync(DOIWNLOAD_DIR_PATH)) {
        return null;
      }
    
      const filesOrdered = readdirSync(DOIWNLOAD_DIR_PATH)
        .map(entry => path.join(DOIWNLOAD_DIR_PATH, entry))
        .filter(entryWithPath => lstatSync(entryWithPath).isFile())
        .map(fileName => ({ fileName, mtime: lstatSync(fileName).mtime }))
        .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
    
      if (!filesOrdered.length) {
        return null;
      }
    
      if (filesOrdered[0].fileName.indexOf('crdownload') > -1) {
        return null;
      }

      const file = filesOrdered[0].fileName;
      const filePath = file.split('/');
      const fileName = filePath[filePath.length - 1].replace('.csv', '');
    
      return { file, fileName };
    },
    deleteDownloadFolder: () => {
      return new Promise((resolve, reject) => {
        rmdir(DOIWNLOAD_DIR_PATH, { maxRetries: 10, recursive: true }, (err) => {
          if (err) {
            console.error(err)
            return reject(err)
          }
          resolve(null)
        })
      })
    }, 
    deleteFile: (filePath) => {
      return new Promise((resolve, reject) => {
        unlink(filePath, (err) => {
          if (err) {
            console.error(err)
            return reject(err)
          }
          resolve(null)
        })
      })
    }  
  })
};
