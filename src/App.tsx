import { paginate, smm } from '@assets/utils';
import data from '@data/bulkfollows.json';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from '@styles/index.module.scss';

function App() {
   const [first, setFirst] = useState<number>(0);

   const onPageChange = (event: PaginatorPageChangeEvent) => {
      setFirst(event.first);
   };

   const init = 10;

   const wrapper = smm(data);

   const [perPage, setPerPage] = useState(init);
   const [pages, setPages] = useState(wrapper.paginate(init));



   return (
      <div className={styles.app}>
         {pages[first].map(item => {
            return <>
               <div className='flex flex-wrap'>
                  <span>
                     {item.name} -
                     <small>{item.category}</small>
                  </span>
                  <FaChevronDown />
               </div>
            </>
         })}
         <Paginator first={first} rows={10} totalRecords={data.length} onPageChange={onPageChange} template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} />
      </div>
   );
}

export default App;
