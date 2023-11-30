import { Helmet } from 'react-helmet';

import { BackgroundLogSign } from 'components/BackgroundLogSign/BackgroundLogSign';
import { PictureLog } from 'components/PictureLog/PictureLog';

export default function LoginPage() {
  return (
    <BackgroundLogSign>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <PictureLog />
    </BackgroundLogSign>
  );
}
