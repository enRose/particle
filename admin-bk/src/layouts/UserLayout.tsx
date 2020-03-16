import { DefaultFooter, MenuDataItem, getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet } from 'react-helmet';
import { Link } from 'umi';
import React from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import { connect } from 'dva';
import SelectLang from '@/components/SelectLang';
import { ConnectProps, ConnectState } from '@/models/connect';
import logo from '../assets/national-park.png';
import styles from './UserLayout.less';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { GithubOutlined } from '@ant-design/icons';

export interface UserLayoutProps extends ConnectProps {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
}

const UserLayout: React.FC<UserLayoutProps> = props => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { breadcrumb } = getMenuData(routes);
  const title = getPageTitle({
    pathname: location.pathname,
    formatMessage,
    breadcrumb,
    ...props,
  });
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.lang}>
          <SelectLang />
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>Instant Park</span>
              </Link>
            </div>
            <div className={styles.desc}>
              <FormattedMessage id="layout.user.logoDesc" />
            </div>
          </div>
          {children}
        </div>
        <DefaultFooter
          copyright={'2020 ' + formatMessage({ id: 'layout.user.footerCopyRight' })}
          links={[
            {
              key: 'github',
              title: <GithubOutlined />,
              href: 'https://github.com/enRose/instant-park',
              blankTarget: true,
            },
            {
              key: 'barin design',
              title: '@' + formatMessage({ id: 'layout.user.footerCompanyName' }),
              href: 'https://github.com/enRose',
              blankTarget: true,
            },
          ]}
        />
      </div>
    </>
  );
};

export default connect(({ settings }: ConnectState) => ({ ...settings }))(UserLayout);