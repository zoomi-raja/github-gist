import { Octokit } from "@octokit/rest";
const octokit = new Octokit({});

export async function getPublicList() {
  return await octokit.gists.listPublic();
}
export async function getByName({ username, signal }) {
  return await octokit.gists.listForUser({
    username,
    request: {
      signal,
    },
  });
}
