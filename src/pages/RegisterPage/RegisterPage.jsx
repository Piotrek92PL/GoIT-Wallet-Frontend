import { Helmet } from 'react-helmet';
import { FormRegister } from 'components/FormRegister/FormRegister';
import { BackgroundLogSign } from 'components/BackgroundLogSign/BackgroundLogSign';
import { PictureSign } from 'components/PictureSign/PictureSign';

export default function RegisterPage() {
  return (
    <BackgroundLogSign>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <PictureSign />
      <FormRegister />
    </BackgroundLogSign>
  );
}
