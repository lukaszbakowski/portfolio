import React, { Children, useEffect, useContext } from 'react';
import module from './buttons.module.scss'
import cx from 'classnames'
import {IndexContext} from '../contexts/IndexContextProvider'

export const NavButton = ({children, thisIndex}) => {

    const { useIndex, setIndex } = useContext(IndexContext);

    const changeIndex = () => {
        setIndex({type:'newIndex', index:thisIndex});
    }

    let style = module.navButton;

    if(thisIndex === useIndex) {
        style = cx(module.navButton,module.active);
    }

    return (
        <div className={style} onClick={changeIndex} >
            {children}
        </div>
    );
}

export const NavContainer = (props) => {

    return (
        <div {...props} >
            {props.children.map((child,index)=> {
                return React.cloneElement(child, { thisIndex:index })
            })}
        </div>
    );
}
