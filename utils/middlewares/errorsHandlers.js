const boom = require('@hapi/boom')
const { config } = require('../../config');
const debug = require("debug")("app:error");
const isRequestAjaxOrApi = require('../../utils/isRequestAjaxOrApi')


function withErrorStack(err, stack) {
    if (config.dev) {
      return { ...err, stack } //Object.assign({}, err, stack)
    }
  }

function logErrors(err, req, res, next) {
    //Sentry.captureException(err);
    //debug(err.stack);
    debug(err.stack);
    next(err);
  }

  function wrapErrors(err, req, res, next) {
    if (!err.isBoom){
      next(boom.badImplementation(err));
    }
  
    next(err);
  }

  function clientErrorHandler(err, req, res, next) {    
    const{
        output: { statusCode, payload }
      } = err;
    // catch errors for AJAX request or if an error occurs while straming
    if (isRequestAjaxOrApi(req) || res.headersSent) {
        //console.log("Mensaje en errors Handlers")
        res.status(statusCode).json(withErrorStack(payload, err.stack));
      } else {
        next(err);
      }
    }

  function errorHandler(err, req, res, next) {    
    const{
        output: { statusCode, payload }
      } = err;

    res.status(statusCode);
    //res.render("error", withErrorStack(payload, err.stack));
    console.log(payload, err.stack)
    } 
  
    module.exports = {
        logErrors,
        clientErrorHandler,
        errorHandler,
        wrapErrors
    }