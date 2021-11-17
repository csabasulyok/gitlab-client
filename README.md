# Client-side library for GitLab API

Install with:

```bash
npm i gitlab-client
```

# Setup

1. Set `GITLAB_API_TOKEN` environment variable to a valid one.
2. (Optional) Set `GITLAB_API_BASE` to a custom URL, if not using `https://gitlab.com/api/v4`
3. (Optional) Set `LOG_GITLAB_REQUESTS` to a boolean representing whether or not to log requests

# Examples

```ts
import gitlab from 'gitlab-client';

(async () => {
  // import project
  await gitlab.projects.import({
    namespace: 'mynamespace',
    path: 'myprojectname',
    file: createReadStream('template.tar.gz'),
  });

  // check project exists
  await gitlab.project('mynamespace/myprojectname').exists();

  // delete project
  await gitlab.project('mynamespace/myprojectname').delete();
})();
```