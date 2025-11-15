const { Like, In } = operators;

 

switch (req.query.method) {

 

    case "Get":

        result.data = await processGet();  // fetches data

        break;

 

    case "Delete":

        result.data = await processDelete(); // deletes selected entry

        break;

 

    case "Save":

        result.data = await processSave();   // this is for saving the modified/new entry

        break;

 

    case "List":

        result.data = await processList(); // this is for the multiselect lookup and the counter in the header

        break;

 

    default:

        break;

}

//Calculate employment Time

 

// Import Moment

var moment = modules.moment;

 

// Use moment to get current day:

var currentDate = moment(new Date(), "YYYY-MM-DD");




// Get all the records from the employee database

const employeeTable = await entities.elearning_hr_demo_employees.createQueryBuilder("alias").getMany();

 

// For each record in the employee database

for (i = 0; i < employeeTable.length; i++) {

 

    var hireDate = moment(employeeTable[i].hireDate, "YYYY-MM-DD");

 

    //Difference in number of days

    var duration = moment.duration(currentDate.diff(hireDate));

    var years = duration.years();

    var months = duration.months();

    var days = duration.days();

    var hire_days = years + "y " + months + "m " + days + "d";

 

    await entities.elearning_hr_demo_employees.update({id: employeeTable[i].id}, {employmentTime: hire_days});

 

}

complete();

 

async function processList() {

 

    let options = {

        where: {}

    };

 

    // Where

    req.body._settings.fieldsSel.forEach(function (field) {

 

        if (req.body[field.name]) {

 

            switch (field.type) {

 

                case "MultiSelectLookup":

                    options.where[field.name] = In(req.body[field.name]);

                    break;

 

                default:

                    options.where[field.name] = Like("%" + req.body[field.name] + "%");

                    break

            }

 

        }

 

    })

 

    // Count total number of records

    const count = await entities.elearning_hr_demo_employees.count(options);

 

    // Pagination

    if (req.body._pagination) {

        options.take = req.body._pagination.take;

        options.skip = req.body._pagination.skip;

    }

 

    // Sorting

    if (req.body._order) {

        options.order = req.body._order

    }

 

    const accounts = await entities.elearning_hr_demo_employees.find(options);

 

    return {

        result: accounts,

        count: count,

        debug: {

            query: req.query,

            body: req.body,

            options

        }

    };

 

}

 

async function processGet() {

    return await entities.elearning_hr_demo_employees.findOne({ id: req.body.id });;

}

 

async function processDelete() {

 

    await entities.elearning_hr_demo_employees.delete(req.body.id);

 

    return {

        status: "OK"

    };

}

 

async function processSave(id) {

 

    await entities.elearning_hr_demo_employees.save(req.body);

 

    return {

        status: "OK"

    };

 

}