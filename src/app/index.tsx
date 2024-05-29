import { Container } from '@/widgets/container';
import {Header} from '@/widgets/header';
import { PageContainer } from '@/widgets/page-container/ui/page-container';
import { Sidebar } from '@/widgets/sidebar';
import { MainPage } from '@/pages/main-page';
import { Content } from '@/widgets/content';

export const App = () => (
  <PageContainer>
    <Header />
    <Content>
      <Sidebar />
      <Container>
        <MainPage />
      </Container>
    </Content>
  </PageContainer>
);
