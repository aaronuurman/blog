import copyToClipboard from '@/utils/copy-to-clipboard'

import classes from './copy.module.css'

interface Props {
    codeObject: any
}

const ButtonCopy = ({ codeObject }: Props) => {
    const handleClick = () => {
        copyToClipboard(codeObject.codeObject)
    }

    return (
        <span role="button" tabIndex={0} className={classes.btn_copy} onClick={handleClick} onKeyDown={handleClick}>
            Copy
        </span>
    )
}

export default ButtonCopy
