const db = require("./db");

const Query = {
  jobs: () => db.jobs.list(),
};

const Job = {
  company: (parentJob) => db.companies.get(parentJob.companyId),
};

module.exports = { Query, Job };
