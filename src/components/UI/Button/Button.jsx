import classes from './Button.module.css'

export const Button = ({children, ...props}) => {
    return (
        <div>
            <button className={classes.btn} {...props}>
                {children}
            </button>
        </div>
    )
}