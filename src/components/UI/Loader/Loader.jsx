import classes from './Loader.module.css'

export const Loader = () => {
    return (
        <>
        <p>Loading...</p>
        <div className={classes.loader}></div>
        </>

    )
}