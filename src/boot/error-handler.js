import { defineBoot } from '#q-app/wrappers';
import { Notify } from 'quasar';
import { getErrorMessage } from 'src/utils/firebase/error-message';

export default defineBoot(async ({ app }) => {
  app.config.errorHandler = (err, instance, info) => {
    console.log('### app.config.errorHandler ###');
    console.log('err', err);
    console.log('instance', instance);
    console.log('info', info);
    Notify.create(getErrorMessage(err.code));
  };
});
