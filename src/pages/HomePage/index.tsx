import { useLanguage } from '@shared/hooks';
import { Button } from 'antd';

const HomePage = () => {
  const { changeLanguage, translate } = useLanguage();

  return (
    <div>
      <Button onClick={changeLanguage}>{translate('Перевод')}</Button>
    </div>
  );
};

export default HomePage;
