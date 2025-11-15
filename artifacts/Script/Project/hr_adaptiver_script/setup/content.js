let fieldCatalog = [];

fieldCatalog.push({name:"firstName", label: "First Name", type: "text"})
fieldCatalog.push({name:"lastName", label: "Last Name", type: "text"})
fieldCatalog.push({name:"emailAddress", label: "Email Address", type: "text"})
fieldCatalog.push({name:"streetAddress", label: "Street Address", type: "text"})
fieldCatalog.push({name:"nationality", label: "Nationality", type: "text"})
fieldCatalog.push({name:"salary", label: "Salary", type: "text"})
fieldCatalog.push({name:"city", label: "City", type: "text"})
fieldCatalog.push({name:"postCode", label: "Post Code", type: "text"})
fieldCatalog.push({name:"department", label: "Department", type: "text"})
fieldCatalog.push({name:"role", label: "Role", type: "text"})
fieldCatalog.push({name:"hireDate", label: "Hire Date", type: "Timestamp Without Time Zone"})
fieldCatalog.push({name:"employmentType", label: "Employment Type", type: "text"})
fieldCatalog.push({name:"employeeReferenceNo", label: "Reference Number", type: "text"})
fieldCatalog.push({name:"employmentTime", label: "employment Time", type: "text"})
result.data = fieldCatalog;
complete()