const apiURL = "http://localhost:9000/graphql";

export async function loadJobs() {
  const response = await fetch(apiURL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: `
            {
              jobs {
                id
                title
                company {
                  id
                  name
                }
              }
            }
            `,
    }),
  });
  const resBody = await response.json();

  return resBody.data.jobs;
}
