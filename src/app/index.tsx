import React from 'react'
import ReactDOM from 'react-dom/client'
import { Container } from '@/widgets/container';
import {Header} from '@/widgets/header';
import { PageContainer } from '@/widgets/page-container/ui/page-container';
import { Sidebar } from '@/widgets/sidebar';
import { MainPage } from '@/pages/main-page';
import { Content } from '@/widgets/content';
import '@/app/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PageContainer>
    <Header />
    <Content>
      <Sidebar />
      <Container>
        <MainPage />
      </Container>
    </Content>
  </PageContainer>
  </React.StrictMode>,
)
