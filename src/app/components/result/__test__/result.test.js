import renderer from 'react-test-renderer';
import { Result } from '../result';
it('results snapshot', () => {
  const data =  [
    {
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
    },
    {
      "url": "https://api.github.com/gists/b8637cc0a21880c39300fa8ad3454677",
      "forks_url": "https://api.github.com/gists/b8637cc0a21880c39300fa8ad3454677/forks",
      "commits_url": "https://api.github.com/gists/b8637cc0a21880c39300fa8ad3454677/commits",
      "id": "b8637cc0a21880c39300fa8ad3454677",
      "node_id": "MDQ6R2lzdGI4NjM3Y2MwYTIxODgwYzM5MzAwZmE4YWQzNDU0Njc3",
      "git_pull_url": "https://gist.github.com/b8637cc0a21880c39300fa8ad3454677.git",
      "git_push_url": "https://gist.github.com/b8637cc0a21880c39300fa8ad3454677.git",
      "html_url": "https://gist.github.com/b8637cc0a21880c39300fa8ad3454677",
      "files": {
        "show-equivalent-checkout-page-in-funnel-builder.php": {
          "filename": "show-equivalent-checkout-page-in-funnel-builder.php",
          "type": "application/x-httpd-php",
          "language": "PHP",
          "raw_url": "https://gist.githubusercontent.com/xlplugins/b8637cc0a21880c39300fa8ad3454677/raw/663a0e4bd5855b5e83603fed3366aaae7850fea8/show-equivalent-checkout-page-in-funnel-builder.php",
          "size": 465
        }
      },
      "public": true,
      "created_at": "2020-12-29T12:59:30Z",
      "updated_at": "2020-12-29T12:59:31Z",
      "description": "Show Equivalent checkout page in funnel builder ",
      "comments": 0,
      "user": null,
      "comments_url": "https://api.github.com/gists/b8637cc0a21880c39300fa8ad3454677/comments",
      "owner": {
        "login": "xlplugins",
        "id": 24355147,
        "node_id": "MDQ6VXNlcjI0MzU1MTQ3",
        "avatar_url": "https://avatars3.githubusercontent.com/u/24355147?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/xlplugins",
        "html_url": "https://github.com/xlplugins",
        "followers_url": "https://api.github.com/users/xlplugins/followers",
        "following_url": "https://api.github.com/users/xlplugins/following{/other_user}",
        "gists_url": "https://api.github.com/users/xlplugins/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/xlplugins/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/xlplugins/subscriptions",
        "organizations_url": "https://api.github.com/users/xlplugins/orgs",
        "repos_url": "https://api.github.com/users/xlplugins/repos",
        "events_url": "https://api.github.com/users/xlplugins/events{/privacy}",
        "received_events_url": "https://api.github.com/users/xlplugins/received_events",
        "type": "User",
        "site_admin": false
      },
      "truncated": false
    },
    {
      "url": "https://api.github.com/gists/e129e4d8698e9b8b6b2a9ddb94229528",
      "forks_url": "https://api.github.com/gists/e129e4d8698e9b8b6b2a9ddb94229528/forks",
      "commits_url": "https://api.github.com/gists/e129e4d8698e9b8b6b2a9ddb94229528/commits",
      "id": "e129e4d8698e9b8b6b2a9ddb94229528",
      "node_id": "MDQ6R2lzdGUxMjllNGQ4Njk4ZTliOGI2YjJhOWRkYjk0MjI5NTI4",
      "git_pull_url": "https://gist.github.com/e129e4d8698e9b8b6b2a9ddb94229528.git",
      "git_push_url": "https://gist.github.com/e129e4d8698e9b8b6b2a9ddb94229528.git",
      "html_url": "https://gist.github.com/e129e4d8698e9b8b6b2a9ddb94229528",
      "files": {
        "train_model_pickle.py": {
          "filename": "train_model_pickle.py",
          "type": "application/x-python",
          "language": "Python",
          "raw_url": "https://gist.githubusercontent.com/adzsroka/e129e4d8698e9b8b6b2a9ddb94229528/raw/c1ca7c5ba1003b0819d351ec3cc91526dcebadd0/train_model_pickle.py",
          "size": 176
        }
      },
      "public": true,
      "created_at": "2020-12-29T12:58:58Z",
      "updated_at": "2020-12-29T12:59:20Z",
      "description": "Modifications to the train_model.py to serialise",
      "comments": 0,
      "user": null,
      "comments_url": "https://api.github.com/gists/e129e4d8698e9b8b6b2a9ddb94229528/comments",
      "owner": {
        "login": "adzsroka",
        "id": 11540552,
        "node_id": "MDQ6VXNlcjExNTQwNTUy",
        "avatar_url": "https://avatars3.githubusercontent.com/u/11540552?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/adzsroka",
        "html_url": "https://github.com/adzsroka",
        "followers_url": "https://api.github.com/users/adzsroka/followers",
        "following_url": "https://api.github.com/users/adzsroka/following{/other_user}",
        "gists_url": "https://api.github.com/users/adzsroka/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/adzsroka/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/adzsroka/subscriptions",
        "organizations_url": "https://api.github.com/users/adzsroka/orgs",
        "repos_url": "https://api.github.com/users/adzsroka/repos",
        "events_url": "https://api.github.com/users/adzsroka/events{/privacy}",
        "received_events_url": "https://api.github.com/users/adzsroka/received_events",
        "type": "User",
        "site_admin": false
      },
      "truncated": false
    }
  ];
  const tree = renderer.create(<Result results={data} loading />).toJSON();
  expect(tree).toMatchSnapshot();
})