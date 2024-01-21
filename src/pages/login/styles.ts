import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  width: 400px;
  background-color: white;
`;

export const SectionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 50px 80px;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-row-gap: 20px;
  width: 100%;
`;
