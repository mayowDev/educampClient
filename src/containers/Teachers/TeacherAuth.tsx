import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';


export const TeacherAuthModal = ({ isPopUpOpen, onClick, children })=>{

    useEffect(() => {
        if(isPopUpOpen){ 
            document.body.style.overflow = 'hidden',
            //@ts-ignore
            document.getElementById('root').style.position = 'fixed'
        }else{  
            document.body.style.overflow = 'unset'
             //@ts-ignore
             document.getElementById('root').style.position = 'unset'
        }
    }, [isPopUpOpen ]);
    
	return (
	 ReactDOM.createPortal(
	 <div className={`pop-div teacherBoarding__auth-popup${isPopUpOpen ?'-active' : ''}`} onClick={onClick}>
	 	<div className="child" onClick={e=>e.stopPropagation()}>{children}</div>
	 </div>,
    //@ts-ignore
	 document.getElementById('modal')
	 )
	)
}

/** 
 * 
 * <section onClick={handleTeacherBoarding} className={`teacherBoarding__auth-popup${isPopUpOpen ?'-active' : ''}` }>
    /* add new field in db of isTeacher where default is false, and when existing user becomes teacher toggle to true               
*/