"use client"
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { query, collection, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import SidebarRow from './SidebarRow'
export default function Sidebar() {
  const [snapshot, loading, error] = useCollection(query(collection(db, 'searches'), orderBy('start_eta', 'desc')))
  return (
    <div className="p-2 md:p-10 py-6 overflow-y-auto border-b border-indigo-500/50 ">
      <div className="flex flex-col items-center justify-center mb-10">
        <DocumentMagnifyingGlassIcon className='h-16 md:w-16 text-indigo-600'/>
        <h1 className='hidden text-center md:inline text-3xl mt-2 mb-2 font-bold'>
          Web scraper
        </h1>
        <h2 className='hidden md:inline text-center  text-xs italic'>
          Scraping the unscrapable
        </h2>
      </div>
      <ul className="flex flex-col gap-2 py-2">
        {snapshot?.docs.map((doc) => (
          <SidebarRow key={doc.id} doc={doc}/>
        ))}
      </ul>
    </div>
  )
}