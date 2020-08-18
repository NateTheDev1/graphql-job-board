const db = require("./db");

const Query = {
  jobs: () => db.jobs.list(),
  job: (root, { id }) => db.jobs.get(id),
};

const Job = {
  company: (parentJob) => db.companies.get(parentJob.companyId),
};

module.exports = { Query, Job };
