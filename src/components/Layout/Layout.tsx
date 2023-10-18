import { Breadcrumb, Layout as AntLayout, Menu } from 'antd'
import { ComponentType, PropsWithChildren } from 'react'
import styles from './Layout.module.css'

const { Header, Content, Footer } = AntLayout
const Layout: ComponentType<PropsWithChildren> = (props: PropsWithChildren) => {
  return (
    <AntLayout>
      <Header className={styles['layout-header']}>
        <img
          className={styles['logo']}
          src="logo.png"
          alt="Crypto Market List"
        />
      </Header>
      <Content className={styles['layout-site']}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'Market list' }]}
        />
        <div className={styles['layout-content']}>{props.children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Crypto Market List ©{new Date().getFullYear()} Created by JavadKh
      </Footer>
    </AntLayout>
  )
}
export default Layout
