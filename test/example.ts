import { createReadStream } from 'fs';
import gitlab from '../src';

(async () => {
  try {
    const path = 'groupname/projectpath';
    const exists = await gitlab.project(path).exists();

    if (exists) {
      console.log('project exists');
      await gitlab.project(path).delete();
    } else {
      console.log('project does not exist');
      await gitlab.projects.import({
        namespace: 'groupname',
        path: 'projectpath',
        file: createReadStream('template.tar.gz'),
      });
    }
  } catch (e) {
    console.log(e.response.status, e.response.data);
  }
})();
