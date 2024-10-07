const URL = {
  WEBAPP: PropertiesService.getScriptProperties().getProperty('URL_WEBAPP') 
}

function doGet(e) {
  let indexHtml;
  
  if (!e.parameter.boot) {
    indexHtml = HtmlService.createTemplateFromFile('login');
    return indexHtml.evaluate()
                    .addMetaTag('viewport', 'width=device-width, initial-scale=1');

  } else {
    indexHtml = HtmlService.createTemplateFromFile('login_boot')
    return indexHtml.evaluate()
                    .setTitle('簡易ログイン')
                    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
  }
}


