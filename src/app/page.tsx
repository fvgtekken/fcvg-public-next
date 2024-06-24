import MultiMenus from '@/components/ui/MultiMenus';
import {  menus } from '../utils/data'
import ContainerMenu from '@/components/ui/ContainerMenu';
import '../style/app/module.page.scss'


export default function Home() {
  return ( 
        <>
           <h1>Hola My first compile with sass! web site!</h1> 
           <ContainerMenu className={'aside'}>
             <MultiMenus menus={menus} />
           </ContainerMenu>
        </>
  );
}