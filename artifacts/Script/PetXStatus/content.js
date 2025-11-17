/*
    This code snippet makes an API call within a script, offering options for API requests.
    The parameters 'data' and 'body' can be used interchangeably, with 'body' taking precedence.
    The request is sent using the axios module. You can provide additional configuration to the
    request by using the axiosConfig property. For example: opts.axiosConfig = { responseType: 'arraybuffer' }.
*/
const mydata = req.body
console.log(mydata)
const opts = {
  //parameters: { status: "available" },
  parameters: {status: mydata[0].status},
  headers: {},
  data: {},
  body: {},
  axiosConfig: {},
};

try {
  // Send api request.
  const response = await apis.petfindByStatus(opts);
  // Log response data
  console.log(response.data);
} catch (error) {
  log.error("Error in request: ", error);
  return fail();
}
complete()