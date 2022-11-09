import React, { useState, useEffect }  from 'react';
import { makeStyles,IconButton } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
    totop: {
        zIndex : 2,
        position: 'fixed',
        bottom: '2vh',
        backgroundColor: '#E8CEBF',
        color: '#4F4846',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: 'white',
            backgroundColor: '#009688'
        },
        right: '5%'
    }
}))
const ScrollToTop = (showBelow) => {

    const classes = useStyles();

    const [show, setShow] = useState(showBelow? false : true);

    const handleScroll = () => {
        if(window.pageYOffset > showBelow){
            if(!show) setShow(true)
        }else{
            if(show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top:0, behavior: `smooth`})
    }

    useEffect (() => {
        if(showBelow){
        window.addEventListener(`scroll`, handleScroll)
        return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return(
        <div>
            <IconButton onClick={handleClick} className={classes.totop}>
                <ExpandLessIcon/>
            </IconButton>
        </div>
    );
};

export default ScrollToTop;
