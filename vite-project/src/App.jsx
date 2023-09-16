import { About, Contact, Hero, Navbar, Projects } from "./components"

export default function App() {
  return (
    <div><div className="fixed inset-0 flex justify-end text-white text-[24px] font-bold grid-cols-3 p-8 text-right table-auto"><Navbar/></div>
    <div className="bg-gray-500 h-[1000px]"></div>
    <About/><Hero/><Projects/><Contact/></div>
  )
}
