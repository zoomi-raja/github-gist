import renderer from 'react-test-renderer';
import { Gist } from '../gist';
it('gist snapshot', () => {
  const data =  {
    "url": "https://api.github.com/gists/bf2876a3c3bd668b3596a38ef4480678",
    "forks_url": "https://api.github.com/gists/bf2876a3c3bd668b3596a38ef4480678/forks",
    "commits_url": "https://api.github.com/gists/bf2876a3c3bd668b3596a38ef4480678/commits",
    "id": "bf2876a3c3bd668b3596a38ef4480678",
    "node_id": "MDQ6R2lzdGJmMjg3NmEzYzNiZDY2OGIzNTk2YTM4ZWY0NDgwNjc4",
    "git_pull_url": "https://gist.github.com/bf2876a3c3bd668b3596a38ef4480678.git",
    "git_push_url": "https://gist.github.com/bf2876a3c3bd668b3596a38ef4480678.git",
    "html_url": "https://gist.github.com/bf2876a3c3bd668b3596a38ef4480678",
    "files": {
      "untrusted-lvl3-solution.js": {
        "filename": "untrusted-lvl3-solution.js",
        "type": "application/javascript",
        "language": "JavaScript",
        "raw_url": "https://gist.githubusercontent.com/Untrusted-Game/bf2876a3c3bd668b3596a38ef4480678/raw/89140e2451eebe5ca5c64ab5bf8b464cf1a68867/untrusted-lvl3-solution.js",
        "size": 990
      }
    },
    "public": true,
    "created_at": "2020-12-29T12:59:32Z",
    "updated_at": "2020-12-29T12:59:32Z",
    "description": "Solution to level 3 in Untrusted: http://alex.nisnevich.com/untrusted/",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/bf2876a3c3bd668b3596a38ef4480678/comments",
    "owner": {
      "login": "Untrusted-Game",
      "id": 37789057,
      "node_id": "MDQ6VXNlcjM3Nzg5MDU3",
      "avatar_url": "https://avatars2.githubusercontent.com/u/37789057?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Untrusted-Game",
      "html_url": "https://github.com/Untrusted-Game",
      "followers_url": "https://api.github.com/users/Untrusted-Game/followers",
      "following_url": "https://api.github.com/users/Untrusted-Game/following{/other_user}",
      "gists_url": "https://api.github.com/users/Untrusted-Game/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Untrusted-Game/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Untrusted-Game/subscriptions",
      "organizations_url": "https://api.github.com/users/Untrusted-Game/orgs",
      "repos_url": "https://api.github.com/users/Untrusted-Game/repos",
      "events_url": "https://api.github.com/users/Untrusted-Game/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Untrusted-Game/received_events",
      "type": "User",
      "site_admin": false
    },
    "truncated": false
  }
  const tree = renderer.create(<Gist key={data.id} data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
})

it('gist empty description snapshot', () => {
  const data =  {
    "url": "https://api.github.com/gists/bf2876a3c3bd668b3596a38ef4480678",
    "forks_url": "https://api.github.com/gists/bf2876a3c3bd668b3596a38ef4480678/forks",
    "commits_url": "https://api.github.com/gists/bf2876a3c3bd668b3596a38ef4480678/commits",
    "id": "bf2876a3c3bd668b3596a38ef4480678",
    "node_id": "MDQ6R2lzdGJmMjg3NmEzYzNiZDY2OGIzNTk2YTM4ZWY0NDgwNjc4",
    "git_pull_url": "https://gist.github.com/bf2876a3c3bd668b3596a38ef4480678.git",
    "git_push_url": "https://gist.github.com/bf2876a3c3bd668b3596a38ef4480678.git",
    "html_url": "https://gist.github.com/bf2876a3c3bd668b3596a38ef4480678",
    "files": {
      "untrusted-lvl3-solution.js": {
        "filename": "untrusted-lvl3-solution.js",
        "type": "application/javascript",
        "language": "JavaScript",
        "raw_url": "https://gist.githubusercontent.com/Untrusted-Game/bf2876a3c3bd668b3596a38ef4480678/raw/89140e2451eebe5ca5c64ab5bf8b464cf1a68867/untrusted-lvl3-solution.js",
        "size": 990
      }
    },
    "public": true,
    "created_at": "2020-12-29T12:59:32Z",
    "updated_at": "2020-12-29T12:59:32Z",
    "description": "",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/bf2876a3c3bd668b3596a38ef4480678/comments",
    "owner": {
      "login": "Untrusted-Game",
      "id": 37789057,
      "node_id": "MDQ6VXNlcjM3Nzg5MDU3",
      "avatar_url": "https://avatars2.githubusercontent.com/u/37789057?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Untrusted-Game",
      "html_url": "https://github.com/Untrusted-Game",
      "followers_url": "https://api.github.com/users/Untrusted-Game/followers",
      "following_url": "https://api.github.com/users/Untrusted-Game/following{/other_user}",
      "gists_url": "https://api.github.com/users/Untrusted-Game/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Untrusted-Game/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Untrusted-Game/subscriptions",
      "organizations_url": "https://api.github.com/users/Untrusted-Game/orgs",
      "repos_url": "https://api.github.com/users/Untrusted-Game/repos",
      "events_url": "https://api.github.com/users/Untrusted-Game/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Untrusted-Game/received_events",
      "type": "User",
      "site_admin": false
    },
    "truncated": false
  }
  const tree = renderer.create(<Gist key={data.id} data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
})