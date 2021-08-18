import resume from '../../bgimages/resume.pdf'
import './style.css'

export const Resume = () => {
    return (
        // <div className='resume'>
        <>
            {/* <embed src={resume}/> */}
            <embed className='resume' src={resume}/>
        </>
    )
}
