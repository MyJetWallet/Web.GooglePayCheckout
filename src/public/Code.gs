// https://developers.google.com/apps-script/guides/html#code.gs_1
// Use this code for Google Docs, Slides, Forms, or Sheets.
function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
    .createMenu('Buy report')
    .addItem('Open', 'openDialog')
    .addToUi();
}

function openDialog() {
  const html = HtmlService.createHtmlOutputFromFile( 'Index' );
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
    .showModalDialog( html, 'Dialog title' );
    // .showSidebar( html, );
}