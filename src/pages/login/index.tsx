import { Typography } from '@mui/material';
import { PageWrapper } from '../../components/PageWrapper';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';

import * as S from './styles';
import { useState } from 'react';

export const LoginPage = () => {
  const [tab, setTab] = useState<'signin' | 'signup'>('signin');

  return (
    <PageWrapper>
      <S.Container>
        <S.ModalContainer>
          <S.SectionContainer>
            <S.InfoContainer>
              <S.Row style={{ justifyContent: 'space-between' }}>
                <Typography
                  variant="h5"
                  onClick={() => setTab('signin')}
                  color={tab === 'signin' ? 'steelblue' : 'grey'}
                  style={{ cursor: 'pointer' }}
                >
                  Sign In
                </Typography>
                <Typography
                  variant="h5"
                  onClick={() => setTab('signup')}
                  color={tab === 'signup' ? 'steelblue' : 'grey'}
                  style={{ cursor: 'pointer' }}
                >
                  Sign Up
                </Typography>
              </S.Row>

              <S.FormContainer>
                {tab === 'signin' && <SignIn />}
                {tab === 'signup' && <SignUp />}
              </S.FormContainer>
            </S.InfoContainer>
          </S.SectionContainer>
        </S.ModalContainer>
      </S.Container>
    </PageWrapper>
  );
};
