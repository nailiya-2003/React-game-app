interface Props {
    children: string;
    color?: string;
    onClick: () => void
}


const Buttons = ({children, onClick, color = 'primary'}: Props) => {
  return (
    <button className = {"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}

export default Buttons