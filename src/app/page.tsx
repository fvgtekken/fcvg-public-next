import MultiMenus from '@/components/ui/MultiMenus';
import {  menus } from '../utils/data'
import Aside from '@/components/ui/Aside';
import '../style/app/module.page.scss'


export default function Home() {
  return ( 
        <>
           <h1>Hola My first compile with sass! web site!</h1> 
           <Aside className={'aside'}>
             <MultiMenus menus={menus} />
           </ Aside>
        </>
  );
}