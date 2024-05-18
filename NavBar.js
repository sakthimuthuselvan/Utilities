import React, { useEffect, useState } from 'react'
import "./nav2.css"
import MenuIcon from '@mui/icons-material/Menu';
import WindowWidth from '../Utilities';
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';

function Index() {
    const navigate = useNavigate()
    const [companyName] = useState("Shopy")
    const [state, setState] = useState({
        isClicked: false,
        sideBar: false,
        categoryClick: false
    })

    const [anchorEl, setAnchorEl] = React.useState(null);
    const { sideBar, categoryClick } = state;


    const globalState = useSelector((state) => state);
    const dispatch = useDispatch()

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick)
    }, [sideBar])


    const handleOutsideClick = (event) => {
        // Close sidebar if the clicked element is outside the sidebar
        if (!event.target.closest('.slide-layer')) {
            setState((pre) => {
                return {
                    ...pre,
                    sideBar: false
                }
            })
        }
    };

    const handleClick = (event) => {
        navigate("/wish-list")
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const size = WindowWidth()

    const sideBaropen = () => {
        setState((pre) => {
            return {
                ...pre,
                sideBar: true,
                categoryClick: false
            }
        })
    }

    const sidebarClose = () => {
        setState((pre) => {
            return {
                ...pre,
                sideBar: false
            }
        })
    }

    const categoryClickFun = () => {
        setState((pre) => {
            return {
                ...pre,
                categoryClick: !categoryClick
            }
        })
    }

    const homeBtnClick = () => {
        navigate("/")

    }
    return (
        <div className='nav'>
            <div className={`full-nav bg-primary letter-primary`}>
                <div className='nav-content mx-3'>
                    <h1 className='text-white' onClick={() => homeBtnClick()}>{companyName}</h1>
                    <div className='box3'>
                        {size === "sm" ?
                            <div>
                                <div className='d-flex align-items-center'>
                                    <IconButton onClick={sideBaropen}><MenuIcon sx={{ fontSize: 25 }} className='text-white pr-3' /></IconButton>
                                    <h3 className='text-white pl-4 pt-2' onClick={() => homeBtnClick()}>{companyName}</h3>
                                </div>
                                <div className={`${sideBar ? "sakthi" : ""}`}>
                                    <div className={`slide-layer ${sideBar ? "sidebar-open" : ""}`}>
                                        <IconButton onClick={sidebarClose}><CloseIcon style={{ fontSize: "2rem" }} /></IconButton>
                                        <div className='pl-2 pt-2'>
                                            <h6 className='item pointer' onClick={categoryClickFun}>category {categoryClick ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</h6>
                                            {categoryClick ?
                                                <div style={{ marginLeft: 30 }}>
                                                    <h6 className='drop-down pointer'>sakthi</h6>
                                                    <h6 className='drop-down pointer'>sakthi</h6>
                                                    <h6 className=' drop-down pointer'>sakthi</h6>
                                                    <h6 className='drop-down pointer'>sakthi</h6>
                                                </div> : null}
                                            <h6 className='item pointer'>Whish List</h6>
                                            <h6 className='item pointer'>Logout</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
