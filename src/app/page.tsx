'use client';
import styled from "styled-components";
import '../style/app/module.page.scss'
import MultiMenus from '@/components/ui/MultiMenus';
import {  menus } from '../utils/data'

const Wrapper = styled.aside`
  background:#OOO;
  width: 250px;
`;


export default function Home() {
  return ( 
        <>
          <h1>Hola My first compile with sass! web site!</h1> 
          <Wrapper>
            <MultiMenus menus={menus}  />
          </Wrapper>
        </>
  );
}