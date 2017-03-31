/**
 * API response base model
 */
module.exports = {
    success: function(data) {
        var successResponse = {};
        successResponse.error = 0;
        successResponse.message = "success";
        successResponse.data = data;
        return successResponse;
    },
    error: function(data) {
        var errorResponse = {};
        errorResponse.error = 1;
        if (data && data.errmsg)
            errorResponse.message = data.errmsg;
        else
            errorResponse.message = "error";
        errorResponse.data = data;
        return errorResponse;
    }
};
