const response = ({ statusCode, message, data, res }) => {
    res.status(statusCode).json({
      data: data,
      message: message,
    });
  };
  
  export default response;
  