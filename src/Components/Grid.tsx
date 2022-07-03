interface Children{
    children:React.ReactNode
}
const Grid = ({children}: Children) => {
  return (
    <div className="grid sm:gird-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6 overflow-hidden pb-9 px-10 py-5">
        {children}
    </div>
  )
}

export default Grid