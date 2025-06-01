import styles from './TextInput.module.css'
export default function TextInput({placeholder, onChange, id}) {
    return (
        <input placeholder={placeholder} onChange={onChange} id={id} type="text" className={styles.textInput} />
    )
}