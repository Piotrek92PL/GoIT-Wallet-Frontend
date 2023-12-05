import { Helmet } from 'react-helmet';
import { FormLogin } from 'components/FormLogin/FormLogin';
import { BackgroundLogSign } from 'components/BackgroundLogSign/BackgroundLogSign';
import { PictureLog } from 'components/PictureLog/PictureLog';

export default function LoginPage() {
  return (
    <BackgroundLogSign>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <PictureLog />
      <FormLogin />
    </BackgroundLogSign>
  );
}
