import './formsControl.scss';

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <textarea {...input} {...props} className={hasError ? 'formControl + error' : 'formControl'}  />
            { hasError && <div className='errorText'>{meta.error}</div> }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <input {...input} {...props} className={hasError ? 'formControl + error' : 'formControl'}  />
            { hasError && <div className='errorText'>{meta.error}</div> }
        </div>
    )
}