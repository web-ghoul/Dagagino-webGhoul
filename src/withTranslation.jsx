import { withTranslation } from 'react-i18next';

function MyComponent({ t }) {
  return <div>{t('home')}</div>;
}

export default withTranslation()(MyComponent);
