


/*
    This code snippet makes an API call within a script, offering options for API requests.
    The parameters 'data' and 'body' can be used interchangeably, with 'body' taking precedence.
    The request is sent using the axios module. You can provide additional configuration to the
    request by using the axiosConfig property. For example: opts.axiosConfig = { responseType: 'arraybuffer' }.
*/
/*
const opts = {
  parameters: { where: "", select: "", take: "", skip: "", order: "" },
  headers: {},
  data: {},
  body: {},
  axiosConfig: {},
};

try {
  // Send api request.
  const response = await apis.equipment(opts);
  // Log response data
  console.log(response.data);
} catch (error) {
  log.error("Error in request: ", error);
  return fail();
}
*/
/*
    This code snippet is for fetching a single entity or multiple entries
    from a table based on a condition, in this case,
    where the entity's ID matches a specified value.
*/


const entity = await entities.equipment
  .createQueryBuilder("alias")
  .where("alias.part_number = :part_number", { part_number: 'IND491526'})
  .getMany();
  console.log(entity)

