function sendResponse(resObj,statusCode,responseData,responseMsg) {
    resObj.status(statusCode).send({
        data:responseData,
        message:responseMsg
    });
}
module.exports = {
    sendResponse
}