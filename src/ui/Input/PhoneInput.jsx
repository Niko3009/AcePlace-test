import Input from './Input'

export default function PhoneInput(props) {
  const value = props?.value || ''
  return <Input {...props} value={value !== '+7 ' ? value : ''} mask={mask} />
}
export { PhoneInput }
export const mask = '+{7} 000 000 00 00'
