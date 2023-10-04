import response from '../utils/payload.js';
import testServices from '../services/test_services.js'

const getTest = async (req, res) => {
  try {
    const test = await testServices.getTest();
    if (test.length > 0) {
      response({
        statusCode: 200,
        message: 'Hello World',
        data: test,
        res: res,
      });
    } else {
      response({
        statusCode: 404,
        message: 'Data not found',
        res: res,
      });
    }
  } catch (error) {
    response({
      statusCode: 500,
      message: 'Internal Server Error',
      res: res,
    });
  }
};


const postTest = async (req, res) => {
  try {
    const postData = req.body;
    const result = await testServices.postTest(postData);
    response({
      statusCode: 201, 
      message: 'Data created successfully',
      data: result,
      res: res,
    });
  } catch (error) {
  
    response({
      statusCode: 500,
      message: 'Internal Server Error',
      res: res,
    });
  }
};

const putTest = async (req, res) => {
  try {
    const id = req.params.id;
    
    const updatedData = req.body;

    const result = await testServices.putTest(id, updatedData);

    response({
      statusCode: 200,
      message: 'Data updated successfully',
      data: result,
      res: res,
    });
  } catch (error) {
    response({
      statusCode: 500,
      message: 'Internal Server Error',
      res: res,
    });
  }
};

export default {
  getTest,
  postTest,
  putTest
};
